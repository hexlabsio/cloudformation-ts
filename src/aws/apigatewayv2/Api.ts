import { Value } from '../../kloudformation/Value';
import { BodyS3LocationProps } from './api/BodyS3LocationProps';
import { CorsProps } from './api/CorsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function api(apiProps: Api & { logicalName?: string }): Api { return ({ ...apiProps, _logicalType: 'AWS::ApiGatewayV2::Api' }) as unknown as Api }

export interface Api extends KloudResource {
    routeSelectionExpression?: Value<string>;
    bodyS3Location?: BodyS3LocationProps;
    description?: Value<string>;
    basePath?: Value<string>;
    failOnWarnings?: Value<boolean>;
    disableSchemaValidation?: Value<boolean>;
    name?: Value<string>;
    target?: Value<string>;
    credentialsArn?: Value<string>;
    corsConfiguration?: CorsProps;
    version?: Value<string>;
    protocolType?: Value<string>;
    routeKey?: Value<string>;
    body?: Value<any>;
    tags?: Value<any>;
    apiKeySelectionExpression?: Value<string>;
}