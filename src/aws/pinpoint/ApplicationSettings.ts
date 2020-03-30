import { Value } from '../../kloudformation/Value';
import { QuietTimeProps } from './applicationsettings/QuietTimeProps';
import { LimitsProps } from './applicationsettings/LimitsProps';
import { CampaignHookProps } from './applicationsettings/CampaignHookProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationSettings(applicationSettingsProps: ApplicationSettings & { logicalName?: string }): ApplicationSettings { return ({ ...applicationSettingsProps, _logicalType: 'AWS::Pinpoint::ApplicationSettings' }) as unknown as ApplicationSettings }

export interface ApplicationSettings extends KloudResource {
    applicationId: Value<string>;
    quietTime?: QuietTimeProps;
    limits?: LimitsProps;
    campaignHook?: CampaignHookProps;
    cloudWatchMetricsEnabled?: Value<boolean>;
}