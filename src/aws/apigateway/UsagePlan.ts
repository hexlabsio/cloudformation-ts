import { ApiStageProps } from './usagePlan/ApiStageProps';
import { Value } from '../../kloudformation/Value';
import { QuotaSettingsProps } from './usagePlan/QuotaSettingsProps';
import { Tag } from '../Tag';
import { ThrottleSettingsProps } from './usagePlan/ThrottleSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function usagePlan(usagePlanProps: UsagePlan): UsagePlan { return ({ ...usagePlanProps, _logicalType: '' }) }
  
export interface UsagePlan extends KloudResource {
  apiStages?: ApiStageProps[]
  description?: Value<string>
  quota?: QuotaSettingsProps
  tags?: Tag[]
  throttle?: ThrottleSettingsProps
  usagePlanName?: Value<string>
}