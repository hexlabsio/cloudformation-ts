import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function alias(aliasProps: Alias & { logicalName?: string }): Alias { return ({ ...aliasProps, _logicalType: 'AWS::KMS::Alias' }) as unknown as Alias }

export interface Alias extends KloudResource {
    aliasName: Value<string>;
    targetKeyId: Value<string>;
}