import { Value } from '../../../kloudformation/Value';

export interface RouteSettingsProps {
  loggingLevel?: Value<string>
  dataTraceEnabled?: Value<boolean>
  throttlingBurstLimit?: Value<number>
  detailedMetricsEnabled?: Value<boolean>
  throttlingRateLimit?: Value<number>
}