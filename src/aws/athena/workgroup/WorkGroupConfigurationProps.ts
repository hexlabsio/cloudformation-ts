import { Value } from '../../../kloudformation/Value';
import { ResultConfigurationProps } from './ResultConfigurationProps';

export function workGroupConfigurationProps(workGroupConfigurationPropsProps: WorkGroupConfigurationProps): WorkGroupConfigurationProps { return (workGroupConfigurationPropsProps) as unknown as WorkGroupConfigurationProps }

export interface WorkGroupConfigurationProps {
    bytesScannedCutoffPerQuery?: Value<number>;
    enforceWorkGroupConfiguration?: Value<boolean>;
    publishCloudWatchMetricsEnabled?: Value<boolean>;
    requesterPaysEnabled?: Value<boolean>;
    resultConfiguration?: ResultConfigurationProps;
}