import { Value } from '../../../kloudformation/Value';

export function monitoringProps(monitoringPropsProps: MonitoringProps): MonitoringProps { return (monitoringPropsProps) as unknown as MonitoringProps }

export interface MonitoringProps {
    enabled?: Value<boolean>;
}