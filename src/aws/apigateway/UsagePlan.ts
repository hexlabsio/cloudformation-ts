import { ApiStageProps } from './usageplan/ApiStageProps';
import { Value } from '../../kloudformation/Value';
import { QuotaSettingsProps } from './usageplan/QuotaSettingsProps';
import { Tag } from '../Tag';
import { ThrottleSettingsProps } from './usageplan/ThrottleSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UsagePlanAttributes = {  }
export function usagePlan(usagePlanProps: UsagePlan): UsagePlan & { attributes: UsagePlanAttributes } { return ({ ...usagePlanProps, _logicalType: 'AWS::ApiGateway::UsagePlan', attributes: {  } }) }

export interface UsagePlan extends KloudResource {
    apiStages?: ApiStageProps[];
    description?: Value<string>;
    quota?: QuotaSettingsProps;
    tags?: Tag[];
    throttle?: ThrottleSettingsProps;
    usagePlanName?: Value<string>;
}