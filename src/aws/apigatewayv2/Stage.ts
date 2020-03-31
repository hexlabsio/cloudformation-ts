import { Value } from '../../kloudformation/Value';
import { AccessLogSettingsProps } from './stage/AccessLogSettingsProps';
import { RouteSettingsProps } from './stage/RouteSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StageAttributes = {  }
export function stage(stageProps: Stage): Stage & { attributes: StageAttributes } { return ({ ...stageProps, _logicalType: 'AWS::ApiGatewayV2::Stage', attributes: {  } }) }

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