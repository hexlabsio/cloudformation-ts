import { Value } from '../../../kloudformation/Value';

export function monitoringConfigurationProps(monitoringConfigurationPropsProps: MonitoringConfigurationProps): MonitoringConfigurationProps { return (monitoringConfigurationPropsProps) as unknown as MonitoringConfigurationProps }

export interface MonitoringConfigurationProps {
    configurationType: Value<string>;
    metricsLevel?: Value<string>;
    logLevel?: Value<string>;
}