import {ApiGatewayManagedOverrides} from "../../aws/apigatewayv2/ApiGatewayManagedOverrides";
import {ApiMapping} from "../../aws/apigatewayv2/ApiMapping";
import {Authorizer} from "../../aws/apigatewayv2/Authorizer";
import {Deployment} from "../../aws/apigatewayv2/Deployment";
import {Api} from "../../aws/apigatewayv2/Api";
import {Permission} from "../../aws/lambda/Permission";
import {AWS} from "../aws";
import {join, joinWith, Value} from "../Value";


export class ApiV2 {
  
  constructor(
    private readonly aws: AWS,
    private readonly stage: Value<string>,
    public api: Api,
    public deployment: Deployment,
    public authorizer?: Authorizer,
    public lambdaArn?: Value<string>,
    public lambdaPermission?: Permission,
    public managedOverrides?: ApiGatewayManagedOverrides,
    public basePathMapping?: ApiMapping,
  ) {}
  
  
  mapTo(apiMappingKey: Value<string>, domainName: Value<string>): this {
    this.basePathMapping = this.aws.apigatewayv2ApiMapping({
      apiId: this.api,
      apiMappingKey,
      stage: this.stage,
      domainName
    });
    return this;
  }
  
  static create(aws: AWS, name: string, stage: string, cognitoUserPoolId?: Value<string>, appClient?: Value<string>, lambdaArn?: Value<string>): ApiV2 {
    const restApi = aws.apigatewayv2Api({
      name,
      protocolType: 'HTTP',
      target: lambdaArn
    });
    const authorizer = cognitoUserPoolId ? aws.apigatewayv2Authorizer({
      apiId: restApi,
      authorizerType: 'JWT',
      identitySource: ['method.request.header.Authorization'],
      jwtConfiguration: {
        audience: [appClient!],
        issuer: join('https://cognito-idp.', {Ref: 'AWS::Region'}, '.amazonaws.com/', cognitoUserPoolId)
      },
      name: `api-auth-${name}`
    }) : undefined;
    const managedOverrides = cognitoUserPoolId ? aws.apigatewayv2ApiGatewayManagedOverrides({
      apiId: restApi,
      route: {
        authorizationType: 'JWT',
        authorizerId: authorizer
      }
    }) : undefined;
    const permission = lambdaArn ? aws.lambdaPermission({
      action: 'lambda:InvokeFunction',
      functionName: lambdaArn!,
      principal: joinWith('.', 'apigateway', {Ref: 'AWS::URLSuffix'}),
      sourceArn: joinWith(':', 'arn', {Ref: 'AWS::Partition'}, 'execute-api', {Ref: 'AWS::Region'}, {Ref: 'AWS::AccountId'}, join(restApi, '/*/*'))
    }): undefined;
    const deployment = aws.apigatewayv2Deployment({
      apiId: restApi,
      _logicalName: 'ApiDeployment' + Math.floor(Math.random() * 100000000),
      stageName: stage
    })
    return new ApiV2(aws, stage, restApi, deployment, authorizer, lambdaArn, permission, managedOverrides);
  }
}
