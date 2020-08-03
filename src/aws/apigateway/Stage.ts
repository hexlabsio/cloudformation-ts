import { AccessLogSettingProps } from './stage/AccessLogSettingProps';
import { Value } from '../../kloudformation/Value';
import { CanarySettingProps } from './stage/CanarySettingProps';
import { MethodSettingProps } from './stage/MethodSettingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function stage(stageProps: Stage): Stage { return ({ ...stageProps, _logicalType: '' }) }
  
export interface Stage extends KloudResource {
  accessLogSetting?: AccessLogSettingProps
  cacheClusterEnabled?: Value<boolean>
  cacheClusterSize?: Value<string>
  canarySetting?: CanarySettingProps
  clientCertificateId?: Value<string>
  deploymentId?: Value<string>
  description?: Value<string>
  documentationVersion?: Value<string>
  methodSettings?: MethodSettingProps[]
  restApiId: Value<string>
  stageName?: Value<string>
  tags?: Tag[]
  tracingEnabled?: Value<boolean>
  variables?: Value<Value<string>[]>
}