import { Value } from '../../kloudformation/Value';
import { CloudWatchLoggingOptionProps } from './applicationcloudwatchloggingoption/CloudWatchLoggingOptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationCloudWatchLoggingOption(applicationCloudWatchLoggingOptionProps: ApplicationCloudWatchLoggingOption & { logicalName?: string }): ApplicationCloudWatchLoggingOption { return ({ ...applicationCloudWatchLoggingOptionProps, _logicalType: 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption' }) as unknown as ApplicationCloudWatchLoggingOption }

export interface ApplicationCloudWatchLoggingOption extends KloudResource {
    applicationName: Value<string>;
    cloudWatchLoggingOption: CloudWatchLoggingOptionProps;
}