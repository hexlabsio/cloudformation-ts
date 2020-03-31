import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AliasAttributes = {  }
export function alias(aliasProps: Alias): Alias & { attributes: AliasAttributes } { return ({ ...aliasProps, _logicalType: 'AWS::KMS::Alias', attributes: {  } }) }

export interface Alias extends KloudResource {
    aliasName: Value<string>;
    targetKeyId: Value<string>;
}