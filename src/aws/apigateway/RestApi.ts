import { Value } from '../../kloudformation/Value';
import { S3LocationProps } from './restApi/S3LocationProps';
import { EndpointConfigurationProps } from './restApi/EndpointConfigurationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RestApiAttributes = { RootResourceId: Attribute<string> }
export function restApi(restApiProps: RestApi): RestApi & {attributes: RestApiAttributes} { return ({ ...restApiProps, _logicalType: 'AWS::ApiGateway::RestApi', attributes: { RootResourceId: 'RootResourceId' } }) }
   
export interface RestApi extends KloudResource {
  apiKeySourceType?: Value<string>
  binaryMediaTypes?: Value<Value<string>[]>
  body?: Value<any>
  bodyS3Location?: S3LocationProps
  cloneFrom?: Value<string>
  description?: Value<string>
  endpointConfiguration?: EndpointConfigurationProps
  failOnWarnings?: Value<boolean>
  minimumCompressionSize?: Value<number>
  name?: Value<string>
  parameters?: Value<Value<string>[]>
  policy?: Value<any>
  tags?: Tag[]
}