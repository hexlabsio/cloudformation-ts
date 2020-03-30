import { ApiStageProps } from './usageplan/ApiStageProps';
import { Value } from '../../kloudformation/Value';
import { QuotaSettingsProps } from './usageplan/QuotaSettingsProps';
import { Tag } from '../Tag';
import { ThrottleSettingsProps } from './usageplan/ThrottleSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function usagePlan(usagePlanProps: UsagePlan & { logicalName?: string }): UsagePlan { return ({ ...usagePlanProps, _logicalType: 'AWS::ApiGateway::UsagePlan' }) as unknown as UsagePlan }

export interface UsagePlan extends KloudResource {
    apiStages?: ApiStageProps[];
    description?: Value<string>;
    quota?: QuotaSettingsProps;
    tags?: Tag[];
    throttle?: ThrottleSettingsProps;
    usagePlanName?: Value<string>;
}