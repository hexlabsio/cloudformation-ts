import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function usagePlanKey(usagePlanKeyProps: UsagePlanKey): UsagePlanKey { return ({ ...usagePlanKeyProps, _logicalType: '' }) }
  
export interface UsagePlanKey extends KloudResource {
  keyId: Value<string>
  keyType: Value<string>
  usagePlanId: Value<string>
}