import { Value } from '../../kloudformation/Value';
import { CloudWatchLoggingOptionProps } from './applicationCloudWatchLoggingOption/CloudWatchLoggingOptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function applicationCloudWatchLoggingOption(applicationCloudWatchLoggingOptionProps: ApplicationCloudWatchLoggingOption): ApplicationCloudWatchLoggingOption { return ({ ...applicationCloudWatchLoggingOptionProps, _logicalType: '' }) }
  
export interface ApplicationCloudWatchLoggingOption extends KloudResource {
  applicationName: Value<string>
  cloudWatchLoggingOption: CloudWatchLoggingOptionProps
}