import { Value } from '../../../kloudformation/Value';

export function monitoringProps(monitoringPropsProps: MonitoringProps): MonitoringProps { return (monitoringPropsProps) }

export interface MonitoringProps {
    enabled?: Value<boolean>;
}