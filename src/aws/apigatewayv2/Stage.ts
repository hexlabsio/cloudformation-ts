import { Value } from '../../kloudformation/Value';
import { AccessLogSettingsProps } from './stage/AccessLogSettingsProps';
import { RouteSettingsProps } from './stage/RouteSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function stage(stageProps: Stage): Stage { return ({ ...stageProps, _logicalType: '' }) }
  
export interface Stage extends KloudResource {
  clientCertificateId?: Value<string>
  deploymentId?: Value<string>
  description?: Value<string>
  accessLogSettings?: AccessLogSettingsProps
  autoDeploy?: Value<boolean>
  routeSettings?: Value<any>
  stageName: Value<string>
  stageVariables?: Value<any>
  apiId: Value<string>
  defaultRouteSettings?: RouteSettingsProps
  tags?: Value<any>
}