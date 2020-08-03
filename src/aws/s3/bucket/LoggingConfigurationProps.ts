import { Value } from '../../../kloudformation/Value';

export interface LoggingConfigurationProps {
  destinationBucketName?: Value<string>
  logFilePrefix?: Value<string>
}