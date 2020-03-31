import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UsagePlanKeyAttributes = {  }
export function usagePlanKey(usagePlanKeyProps: UsagePlanKey): UsagePlanKey & { attributes: UsagePlanKeyAttributes } { return ({ ...usagePlanKeyProps, _logicalType: 'AWS::ApiGateway::UsagePlanKey', attributes: {  } }) }

export interface UsagePlanKey extends KloudResource {
    keyId: Value<string>;
    keyType: Value<string>;
    usagePlanId: Value<string>;
}