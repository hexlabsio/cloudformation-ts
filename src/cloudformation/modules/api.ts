
import {Authorizer} from "../../aws/apigateway/Authorizer";
import {BasePathMapping} from "../../aws/apigateway/BasePathMapping";
import {Deployment} from "../../aws/apigateway/Deployment";
import { DomainName } from '../../aws/apigateway/DomainName';
import {Method} from "../../aws/apigateway/Method";
import {Resource} from "../../aws/apigateway/Resource";
import {RestApi} from "../../aws/apigateway/RestApi";
import {Permission} from "../../aws/lambda/Permission";
import { RecordSet } from '../../aws/route53/RecordSet';
import { AWSResourcesFor } from '../aws';
import {join, joinWith, Value} from "../Value";
import {Tag} from '../../aws/Tag';

export type ApiExpects = AWSResourcesFor<'apigateway' | 'lambda' | 'route53'>
export class Path {
  
  constructor(
    private readonly aws: ApiExpects,
    public api: Api,
    public resources: Resource[],
    public parent?: Path,
    public methods: Method[] = [],
    public optionsMethod?: Method,
    public paths: Path[] = [],
  ) {}
  
  route(): string {
    const parentPath = this.parent ? (this.parent.route() + '/') : ''
    return parentPath + this.resources.map(it => it.properties.pathPart).join('/')
  }
  
  path(path: string): Path {
    const resources = Path.resources(this.aws, this.api, path, this.resources[this.resources.length - 1]);
    const p = new Path(this.aws, this.api, resources, this).options();
    this.paths.push(p);
    return p;
  }
  
  private longPath(parts: string[], info: PathInfo): Path {
    if(parts.length === 0) {
      (info.methods ?? []).forEach(method => this.method(method, info.methodIntegrations?.[method]?.lambda, info.methodIntegrations?.[method]?.authorized ?? true).options());
      if(info.paths) {
        Object.keys(info.paths).map(path => this.paths.push(Path.longPath(this.aws, this.api, path, info.paths![path], this)));
      }
      if(info.options && info.methods && info.methods.length > 0) {
        const {origin, headers, credentials} = info.options
        this.options(origin, headers, credentials)
      }
      return this;
    } else {
      const nextPart = Path.longPath(this.aws, this.api, '/' + parts.join('/'), info, this);
      this.paths.push(nextPart);
      return nextPart;
    }
  }
  
  private pathLogicalNames(): string {
    const resources = this.resources.map(it => it.properties.pathPart.toString().startsWith('{') ? (it.properties.pathPart.toString().substring(1, it.properties.pathPart.toString().length-1) + 'Var') : it.properties.pathPart.toString()).join('');
    return (this.parent?.pathLogicalNames() ?? '') + resources.replace(/[\W.-]+/g, '');
  }
  
  private logicalName(): string {
    return this.api.name.replace(/[\W.-]+/g, '') + this.pathLogicalNames();
  }
  
  method(method: string, specificLambdaArn?: Value<string>, authorized?: boolean): Path {
    if(specificLambdaArn) {
      this.api.lambdaPermissions.push(this.aws.lambda.permission({
        action: 'lambda:InvokeFunction',
        functionName: specificLambdaArn!,
        principal: joinWith('.', 'apigateway', {Ref: 'AWS::URLSuffix'}),
        sourceArn: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'execute-api', {Ref: 'AWS::Region'}, {Ref: 'AWS::AccountId'}, join(this.api.restApi, '/*/*'))
      }));
    }
    const apiMethod = this.aws.apigateway.method({
      httpMethod: method,
      resourceId: this.resources[this.resources.length - 1],
      restApiId: this.api.restApi,
      apiKeyRequired: false,
      ...(this.api.authorizer && authorized ? { authorizationType: this.api.authorizerType, authorizerId: this.api.authorizer}: { authorizationType: 'NONE' }),
      ...((this.api.lambdaArn || specificLambdaArn) ? { integration: {
          integrationHttpMethod: 'POST',
          type: 'AWS_PROXY',
          uri: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'apigateway', {Ref: 'AWS::Region'},
            join('lambda:path/2015-03-31/functions/', specificLambdaArn! ?? this.api.lambdaArn, '/invocations')
          ),
        } } : {}),
      methodResponses: [],
      requestParameters: {}
    }).withLogicalName(this.aws.logicalName(`Method${this.logicalName()}${method}`));
    this.methods.push(apiMethod);
    this.api.deployment.withDependency(...(this.api.deployment.dependsOn ?? []), apiMethod)
    return this;
  }
  
  options(origin: string = '*', headers: string[] = [], credentials: boolean = true): Path {
      const corsOrigin = 'method.response.header.Access-Control-Allow-Origin'
      const corsHeaders = 'method.response.header.Access-Control-Allow-Headers'
      const corsMethods = 'method.response.header.Access-Control-Allow-Methods'
      const corsCredentials = 'method.response.header.Access-Control-Allow-Credentials'
      const methods = this.methods.map(it => it.properties.httpMethod).join();
      if (this.optionsMethod) {
        this.optionsMethod.properties.integration!.integrationResponses![0].responseParameters = {
          _nocaps: '',
          [corsOrigin]: `'${origin}'`,
          [corsHeaders]: `'${headers.join() || '*'}'`,
          [corsMethods]: `'${methods}'`,
          [corsCredentials]: `'${credentials}'`
        }
      } else {
        this.optionsMethod = this.aws.apigateway.method({
          httpMethod: 'OPTIONS',
          resourceId: this.resources[this.resources.length - 1],
          restApiId: this.api.restApi,
          authorizationType: 'NONE',
          methodResponses: [{
            statusCode: '200',
            responseModels: {},
            responseParameters: {
              _nocaps: '',
              [corsOrigin]: true as any,
              [corsHeaders]: true as any,
              [corsMethods]: true as any,
              [corsCredentials]: true as any
            }
          }],
          requestParameters: {},
          integration: {
            type: 'MOCK',
            requestTemplates: {
              _nocaps: '',
              'application/json': '{statusCode:200}'
            },
            contentHandling: 'CONVERT_TO_TEXT',
            integrationResponses: [
              {
                statusCode: '200',
                responseParameters: {
                  _nocaps: '',
                  [corsOrigin]: `'${origin}'`,
                  [corsHeaders]: `'${headers.join() || '*'}'`,
                  [corsMethods]: `'${methods}'`,
                  [corsCredentials]: `'${credentials}'`
                },
                responseTemplates: {
                  _nocaps: '',
                  'application/json': '#set($origin = $input.params("Origin"))\n#if($origin == "") #set($origin = $input.params("origin")) #end\n#if($origin == "*") #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin) #end'
                }
              }
            ]
          }
        }).withLogicalName(this.aws.logicalName(`Method${this.logicalName()}Options`))
      }
    return this;
  }
  
  private static resources(aws: AWSResourcesFor<'apigateway'>, api: Api, path: string, parent: Value<string>, parentLogicalName?: string): Resource[] {
    const parts = path.startsWith('/') ? path.substring(1).split('/') : path.split('/');
    let previous = parent;
    let pathName = '';
    const resources: Resource[] = [];
    for(const part of parts) {
      pathName += part.startsWith('{') ? (part.substring(1, part.length-1) + 'Var') : part;
      const resource = aws.apigateway.resource({
        parentId: previous,
        restApiId: api.restApi,
        pathPart: part,
      }).withLogicalName(aws.logicalName(`Api${api.name}${parentLogicalName ?? ''}${pathName}`.replace(/[\W.-]+/g, '')));
      resources.push(resource);
      previous = resource
    }
    return resources;
  }
  
  static longPath(aws: ApiExpects, api: Api, path: string, info: PathInfo, parent?: Path): Path {
    const parentLogicalName = parent?.pathLogicalNames();
    const newPathResources = Path.resources(aws, api, path, parent?.resources?.[parent.resources.length-1] ?? api.restApi.attributes.RootResourceId(), parentLogicalName)
    const infoOptions = info?.options
    const newPath = new Path(aws, api, newPathResources, parent)
    .options(infoOptions?.origin ?? '*', infoOptions?.headers ?? [], infoOptions?.credentials ?? true)
    .longPath([], info);
    newPath.parent = parent;
    return newPath;
  }
  
  static resource(aws: ApiExpects, api: Api, path: string): Path {
    const resources = Path.resources(aws, api, path, api.restApi.attributes.RootResourceId());
    return new Path(aws, api, resources).options()
  }
}

export interface ApiDefinition {
  resources: Array<{path: string, method: string}>;
}

export interface SnsDefinition { topicName: string, handler: string }

export interface PathInfo { 
  paths?: { [key: string]: PathInfo }, 
  methods?: string[],
  methodIntegrations?: {[ method: string]: { lambda: Value<string>, authorized?: boolean } }
  options?: { origin: string, headers: string[], credentials: boolean }
}

export type AuthorizerType = 'NONE' | 'AWS_IAM' | 'CUSTOM' | 'COGNITO_USER_POOLS' | 'AWS_CROSS_ACCOUNT_IAM' | 'JWT';

export class Api{
  
  constructor(
    private readonly aws: ApiExpects,
    public readonly name: string,
    public restApi: RestApi,
    public deployment: Deployment,
    public authorizer?: Authorizer,
    public authorizerType?: AuthorizerType,
    public lambdaArn?: Value<string>,
    public lambdaPermissions: Permission[] = [],
    public basePathMapping?: BasePathMapping,
    private paths: Path[] = [],
    public customDomain?: DomainName,
    public aRecord?: RecordSet,
  ) {}
  
  pathMethodsFrom(path: Path): Array<{path: string, method: string}> {
    const mainRoutes = path.methods.map(method => ({path: path.route(), method: method.properties.httpMethod.toString()}));
    const subRoutes = path.paths.flatMap(this.pathMethodsFrom.bind(this));
    return [...mainRoutes, ...subRoutes] as Array<{path: string, method: string}>;
  }
  
  definition(): ApiDefinition {
    return { resources: this.paths.flatMap(this.pathMethodsFrom.bind(this)) };
  }
  
  /**
   * @param path Can include variables in { } like a/b/{c}
   */
  path(path: string): Path {
    const p = Path.resource(this.aws, this, path);
    this.paths.push(p);
    return p;
  }
  
  mapTo(basePath: Value<string>, domainName: Value<string>): this {
    this.basePathMapping = this.aws.apigateway.basePathMapping({
      restApiId: this.restApi,
      stage: this.deployment.properties.stageName,
      basePath,
      domainName
    }).withDependency(this.deployment);
    return this;
  }

  mapToARecord(certificateArnInUsEast1: Value<string>, hostedZoneId: Value<string>, apiDomain: Value<string>): this {
    this.customDomain = this.aws.apigateway.domainName({
      domainName: apiDomain,
      certificateArn: certificateArnInUsEast1,
      endpointConfiguration: { types: ['EDGE'] }
    });
    this.aRecord = this.aws.route53.recordSet({
      name: apiDomain,
      type: 'A',
      hostedZoneId: hostedZoneId,
      aliasTarget: {
        dNSName: this.customDomain.attributes.DistributionDomainName(),
        hostedZoneId: this.customDomain.attributes.DistributionHostedZoneId()
      }
    })
    return this.mapToDomain(this.customDomain);
  }

  mapToDomain(domainName: Value<string>): this {
    this.basePathMapping = this.aws.apigateway.basePathMapping({
      restApiId: this.restApi,
      stage: this.deployment.properties.stageName,
      domainName
    }).withDependency(this.deployment);
    return this;
  }
  
  apiFrom(pathInfo: { [key: string]: PathInfo }): this {
    this.paths = Object.keys(pathInfo).map(path => Path.longPath(this.aws, this, path, pathInfo[path]));
    return this;
  }

  withCognitoAuthorizer(userPoolArn: Value<string>, type: 'TOKEN' | 'REQUEST' | 'COGNITO_USER_POOLS' = 'COGNITO_USER_POOLS'): this {
   this.authorizer = this.aws.apigateway.authorizer({
      authorizerResultTtlInSeconds: 300,
      providerARNs: [userPoolArn],
      identitySource: 'method.request.header.Authorization',
      type: type,
      restApiId: this.restApi,
      name: `api-auth`,
    });
   this.authorizerType = 'COGNITO_USER_POOLS'
    return this;
  }

  withCustomAuthorizer(lambdaArn: Value<string>, identitySource: Value<string>, authType: AuthorizerType = 'CUSTOM', ttl: Value<number> = 300, type: 'TOKEN' | 'REQUEST' = 'REQUEST'): this {
    this.authorizer = this.aws.apigateway.authorizer({
      authorizerResultTtlInSeconds: ttl,
      name: 'api-auth',
      authorizerUri: join('arn:aws:apigateway:', this.aws.region, ':lambda:path/2015-03-31/functions/', lambdaArn, '/invocations'),
      restApiId: this.restApi,
      type,
      identitySource: identitySource,
    });
    this.authorizerType = authType;

    this.aws.lambda.permission({
      action: 'lambda:InvokeFunction',
      functionName: lambdaArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: join('arn:aws:execute-api:', this.aws.region, ':', this.aws.accountId,':', this.restApi, '/authorizers/', this.authorizer)
    })
    return this;
  }

  static create(aws: ApiExpects, name: string, stage: Value<string>, lambdaArn?: Value<string>, tags?: Tag[]): Api {
    const restApi = aws.apigateway.restApi({ name, tags });
    const permission = lambdaArn ? aws.lambda.permission({
      action: 'lambda:InvokeFunction',
      functionName: lambdaArn!,
      principal: joinWith('.', 'apigateway', {Ref: 'AWS::URLSuffix'}),
      sourceArn: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'execute-api', {Ref: 'AWS::Region'}, {Ref: 'AWS::AccountId'}, join(restApi, '/*/*'))
    }): undefined;
    const deployment = aws.apigateway.deployment({
      restApiId: restApi,
      stageName: stage
    }).withLogicalName(aws.logicalName('ApiDeployment' + Math.floor(Math.random() * 100000000)))
    return new Api(aws, name, restApi, deployment, undefined, undefined, lambdaArn, permission ? [permission] : [], undefined);
  }
}
