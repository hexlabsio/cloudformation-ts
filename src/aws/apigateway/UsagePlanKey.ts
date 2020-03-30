import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function usagePlanKey(usagePlanKeyProps: UsagePlanKey & { logicalName?: string }): UsagePlanKey { return ({ ...usagePlanKeyProps, _logicalType: 'AWS::ApiGateway::UsagePlanKey' }) as unknown as UsagePlanKey }

export interface UsagePlanKey extends KloudResource {
    keyId: Value<string>;
    keyType: Value<string>;
    usagePlanId: Value<string>;
}