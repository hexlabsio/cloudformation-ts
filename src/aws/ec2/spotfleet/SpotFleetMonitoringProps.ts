import { Value } from '../../../kloudformation/Value';

export function spotFleetMonitoringProps(spotFleetMonitoringPropsProps: SpotFleetMonitoringProps): SpotFleetMonitoringProps { return (spotFleetMonitoringPropsProps) as unknown as SpotFleetMonitoringProps }

export interface SpotFleetMonitoringProps {
    enabled?: Value<boolean>;
}