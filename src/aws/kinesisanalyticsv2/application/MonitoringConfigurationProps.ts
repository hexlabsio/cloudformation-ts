import { Value } from '../../../kloudformation/Value';

export interface MonitoringConfigurationProps {
  configurationType: Value<string>
  metricsLevel?: Value<string>
  logLevel?: Value<string>
}