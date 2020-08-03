import { AccessLogSettingProps } from './AccessLogSettingProps';
import { Value } from '../../../kloudformation/Value';
import { CanarySettingProps } from './CanarySettingProps';
import { MethodSettingProps } from './MethodSettingProps';
import { Tag } from '../../Tag';

export interface StageDescriptionProps {
  accessLogSetting?: AccessLogSettingProps
  cacheClusterEnabled?: Value<boolean>
  cacheClusterSize?: Value<string>
  cacheDataEncrypted?: Value<boolean>
  cacheTtlInSeconds?: Value<number>
  cachingEnabled?: Value<boolean>
  canarySetting?: CanarySettingProps
  clientCertificateId?: Value<string>
  dataTraceEnabled?: Value<boolean>
  description?: Value<string>
  documentationVersion?: Value<string>
  loggingLevel?: Value<string>
  methodSettings?: MethodSettingProps[]
  metricsEnabled?: Value<boolean>
  tags?: Tag[]
  throttlingBurstLimit?: Value<number>
  throttlingRateLimit?: Value<number>
  tracingEnabled?: Value<boolean>
  variables?: Value<Value<string>[]>
}