import { Value } from '../../kloudformation/Value';
import { AccessLogSettingsProps } from './stage/AccessLogSettingsProps';
import { RouteSettingsProps } from './stage/RouteSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stage(stageProps: Stage & { logicalName?: string }): Stage { return ({ ...stageProps, _logicalType: 'AWS::ApiGatewayV2::Stage' }) as unknown as Stage }

export interface Stage extends KloudResource {
    stageName: Value<string>;
    apiId: Value<string>;
    clientCertificateId?: Value<string>;
    deploymentId?: Value<string>;
    description?: Value<string>;
    accessLogSettings?: AccessLogSettingsProps;
    autoDeploy?: Value<boolean>;
    routeSettings?: Value<any>;
    stageVariables?: Value<any>;
    defaultRouteSettings?: RouteSettingsProps;
    tags?: Value<any>;
}