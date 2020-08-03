import { Value } from '../../../kloudformation/Value';
import { ResultConfigurationUpdatesProps } from './ResultConfigurationUpdatesProps';

export interface WorkGroupConfigurationUpdatesProps {
  bytesScannedCutoffPerQuery?: Value<number>
  enforceWorkGroupConfiguration?: Value<boolean>
  publishCloudWatchMetricsEnabled?: Value<boolean>
  requesterPaysEnabled?: Value<boolean>
  resultConfigurationUpdates?: ResultConfigurationUpdatesProps
  removeBytesScannedCutoffPerQuery?: Value<boolean>
}