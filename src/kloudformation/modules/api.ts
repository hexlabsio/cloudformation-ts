import {Authorizer} from "../../aws/apigateway/Authorizer";
import {Deployment} from "../../aws/apigateway/Deployment";
import {Method} from "../../aws/apigateway/Method";
import {Resource} from "../../aws/apigateway/Resource";
import {RestApi} from "../../aws/apigateway/RestApi";
import {Permission} from "../../aws/lambda/Permission";
import {AWS} from "../aws";
import {join, joinWith, Value} from "../Value";


export class Path {
  
  constructor(
    private readonly aws: AWS,
    public api: Api,
    public resources: Resource[],
    public parent?: Path,
    public methods: Method[] = [],
    public optionsMethod?: Method
  ) {}
  
  path(path: string): Path {
    const resources = Path.resources(this.aws, this.api, path, this.resources[this.resources.length - 1]);
    return new Path(this.aws, this.api, resources, this);
  }
  
  method(method: string): Path {
    const apiMethod = this.aws.apigatewayMethod({
      httpMethod: method,
      resourceId: this.resources[this.resources.length - 1],
      restApiId: this.api.restApi,
      apiKeyRequired: false,
      ...(this.api.authorizer ? { authorizationType: 'COGNITO_USER_POOLS', authorizerId: this.api.authorizer}: {}),
      ...(this.api.lambdaArn ? { integration: {
          integrationHttpMethod: 'POST',
          type: 'AWS_PROXY',
          uri: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'apigateway', {Ref: 'AWS::Region'},
            join('lambda:path/2015-03-31/functions/', this.api.lambdaArn, '/invocations')
          ),
        } } : {}),
      methodResponses: [],
      requestParameters: {}
    });
    this.methods.push(apiMethod);
    this.api.deployment._dependsOn = [...(this.api.deployment._dependsOn ?? []), apiMethod]
    return this;
  }
  
  options(name: string, origin: '*', headers: string[], credentials: boolean): Path {
    const corsOrigin = 'method.response.header.Access-Control-Allow-Origin'
    const corsHeaders = 'method.response.header.Access-Control-Allow-Headers'
    const corsMethods = 'method.response.header.Access-Control-Allow-Methods'
    const corsCredentials = 'method.response.header.Access-Control-Allow-Credentials'
    const methods = this.methods.map(it => it.httpMethod).join();
    if(this.optionsMethod) {
     this.optionsMethod.integration!.integrationResponses![0].responseParameters = {
       [corsOrigin]: origin,
       [corsHeaders]: headers.join(),
       [corsMethods]: methods,
       [corsCredentials]: `${credentials}`
     }
    } else {
      this.optionsMethod = this.aws.apigatewayMethod({
        _logicalName: `${name}Options`,
        httpMethod: 'OPTIONS',
        resourceId: this.resources[this.resources.length - 1],
        restApiId: this.api.restApi,
        methodResponses: [{
          statusCode: '200',
          responseModels: {},
          responseParameters: {
            [corsOrigin]: true,
            [corsHeaders]: true,
            [corsMethods]: true,
            [corsCredentials]: true
          }
        }],
        requestParameters: {},
        integration: {
          type: 'MOCK',
          requestTemplates: { ['application/json']: '{statusCode:200}' },
          contentHandling: 'CONVERT_TO_TEXT',
          integrationResponses: [
            {
              statusCode: '200',
              responseParameters: {
                [corsOrigin]: origin,
                [corsHeaders]: headers.join(),
                [corsMethods]: methods,
                [corsCredentials]: `${credentials}`
              },
              responseTemplates: {
                'application/json': '#set($origin = $input.params("Origin"))\n#if($origin == "") #set($origin = $input.params("origin")) #end\n#if($origin == "*") #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin) #end'
              }
            }
          ]
        }
      })
    }
    return this;
  }
  
  private static resources(aws: AWS, api: Api, path: string, parent: Value<string>): Resource[] {
    const parts = path.split('/');
    let previous = parent;
    let pathName = '';
    const resources: Resource[] = [];
    for(const part of parts) {
      pathName += part.replace(/[\{\}]/g, '')
      const resource = aws.apigatewayResource({
        parentId: previous,
        restApiId: api.restApi,
        pathPart: part,
        _logicalName: `ApiGatewayResource${pathName}`
      });
      resources.push(resource);
      previous = resource
    }
    return resources;
  }
  
  static resource(aws: AWS, api: Api, path: string): Path {
    const resources = Path.resources(aws, api, path, api.restApi.attributes.RootResourceId);
    return new Path(aws, api, resources).options(path.replace(/[\{\}/]/g, ''), '*', [], true)
  }
}

export class Api {
  
  constructor(
    private readonly aws: AWS,
    public restApi: RestApi,
    public deployment: Deployment,
    public authorizer?: Authorizer,
    public lambdaArn?: Value<string>,
    public lambdaPermission?: Permission
  ) {
  }
  
  /**
   *
   * @param path Can include variables in { } like a/b/{c}
   */
  path(path: string): Path {
    return Path.resource(this.aws, this, path);
  }
  
  
  static create(aws: AWS, name: string, stage: string, providerArns?: Value<string>[], lambdaArn?: Value<string>): Api {
    const restApi = aws.apigatewayRestApi({ name });
    const authorizer = providerArns && aws.apigatewayAuthorizer({
      authorizerResultTtlInSeconds: 300,
      providerARNs: providerArns,
      identitySource: 'method.request.header.Authorization',
      type: 'COGNITO_USER_POOLS',
      restApiId: restApi,
      name: `api-auth-${name}`
    })
    const permission = lambdaArn ? aws.lambdaPermission({
      action: 'lambda:InvokeFunction',
      functionName: lambdaArn!,
      principal: joinWith('.', 'apigateway', {Ref: 'AWS::URLSuffix'}),
      sourceArn: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'execute-api', {Ref: 'AWS::Region'}, {Ref: 'AWS::AccountId'}, join(restApi, '/*/*'))
    }): undefined;
    const deployment = aws.apigatewayDeployment({
      restApiId: restApi,
      _logicalName: 'ApiDeployment' + Math.floor(Math.random() * 100000000),
      stageName: stage
    })
    return new Api(aws, restApi, deployment, authorizer, lambdaArn, permission);
  }
}
