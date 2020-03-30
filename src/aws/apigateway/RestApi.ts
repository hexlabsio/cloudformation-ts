import { Value } from '../../kloudformation/Value';
import { S3LocationProps } from './restapi/S3LocationProps';
import { EndpointConfigurationProps } from './restapi/EndpointConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function restApi(restApiProps: RestApi & { logicalName?: string }): RestApi { return ({ ...restApiProps, _logicalType: 'AWS::ApiGateway::RestApi' }) as unknown as RestApi }

export interface RestApi extends KloudResource {
    apiKeySourceType?: Value<string>;
    binaryMediaTypes?: Value<Value<string>[]>;
    body?: Value<any>;
    bodyS3Location?: S3LocationProps;
    cloneFrom?: Value<string>;
    description?: Value<string>;
    endpointConfiguration?: EndpointConfigurationProps;
    failOnWarnings?: Value<boolean>;
    minimumCompressionSize?: Value<number>;
    name?: Value<string>;
    parameters?: { [key: string]: Value<string> };
    policy?: Value<any>;
    tags?: Tag[];
}