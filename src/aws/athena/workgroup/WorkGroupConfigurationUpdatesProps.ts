import { Value } from '../../../kloudformation/Value';
import { ResultConfigurationUpdatesProps } from './ResultConfigurationUpdatesProps';

export function workGroupConfigurationUpdatesProps(workGroupConfigurationUpdatesPropsProps: WorkGroupConfigurationUpdatesProps): WorkGroupConfigurationUpdatesProps { return (workGroupConfigurationUpdatesPropsProps) as unknown as WorkGroupConfigurationUpdatesProps }

export interface WorkGroupConfigurationUpdatesProps {
    bytesScannedCutoffPerQuery?: Value<number>;
    enforceWorkGroupConfiguration?: Value<boolean>;
    publishCloudWatchMetricsEnabled?: Value<boolean>;
    requesterPaysEnabled?: Value<boolean>;
    resultConfigurationUpdates?: ResultConfigurationUpdatesProps;
    removeBytesScannedCutoffPerQuery?: Value<boolean>;
}