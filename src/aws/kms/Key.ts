import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type KeyAttributes = { Arn: Attribute<string> }
export function key(keyProps: Key): Key & { attributes: KeyAttributes } { return ({ ...keyProps, _logicalType: 'AWS::KMS::Key', attributes: { Arn: 'Arn' } }) }

export interface Key extends KloudResource {
    keyPolicy: Value<any>;
    description?: Value<string>;
    enableKeyRotation?: Value<boolean>;
    enabled?: Value<boolean>;
    keyUsage?: Value<string>;
    pendingWindowInDays?: Value<number>;
    tags?: Tag[];
}