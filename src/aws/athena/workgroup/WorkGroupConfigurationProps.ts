import { Value } from '../../../kloudformation/Value';
import { ResultConfigurationProps } from './ResultConfigurationProps';

export interface WorkGroupConfigurationProps {
  bytesScannedCutoffPerQuery?: Value<number>
  enforceWorkGroupConfiguration?: Value<boolean>
  publishCloudWatchMetricsEnabled?: Value<boolean>
  requesterPaysEnabled?: Value<boolean>
  resultConfiguration?: ResultConfigurationProps
}