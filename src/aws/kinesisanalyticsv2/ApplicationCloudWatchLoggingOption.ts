import { Value } from '../../kloudformation/Value';
import { CloudWatchLoggingOptionProps } from './applicationcloudwatchloggingoption/CloudWatchLoggingOptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationCloudWatchLoggingOptionAttributes = {  }
export function applicationCloudWatchLoggingOption(applicationCloudWatchLoggingOptionProps: ApplicationCloudWatchLoggingOption): ApplicationCloudWatchLoggingOption & { attributes: ApplicationCloudWatchLoggingOptionAttributes } { return ({ ...applicationCloudWatchLoggingOptionProps, _logicalType: 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption', attributes: {  } }) }

export interface ApplicationCloudWatchLoggingOption extends KloudResource {
    applicationName: Value<string>;
    cloudWatchLoggingOption: CloudWatchLoggingOptionProps;
}