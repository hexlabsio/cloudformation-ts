import { Value } from '../../kloudformation/Value';
import { MessageConfigurationProps } from './campaign/MessageConfigurationProps';
import { ScheduleProps } from './campaign/ScheduleProps';
import { WriteTreatmentResourceProps } from './campaign/WriteTreatmentResourceProps';
import { LimitsProps } from './campaign/LimitsProps';
import { CampaignHookProps } from './campaign/CampaignHookProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function campaign(campaignProps: Campaign & { logicalName?: string }): Campaign { return ({ ...campaignProps, _logicalType: 'AWS::Pinpoint::Campaign' }) as unknown as Campaign }

export interface Campaign extends KloudResource {
    segmentId: Value<string>;
    name: Value<string>;
    messageConfiguration: MessageConfigurationProps;
    schedule: ScheduleProps;
    applicationId: Value<string>;
    description?: Value<string>;
    isPaused?: Value<boolean>;
    additionalTreatments?: WriteTreatmentResourceProps[];
    segmentVersion?: Value<number>;
    treatmentDescription?: Value<string>;
    limits?: LimitsProps;
    holdoutPercent?: Value<number>;
    campaignHook?: CampaignHookProps;
    tags?: Value<any>;
    treatmentName?: Value<string>;
}