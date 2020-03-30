import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function key(keyProps: Key & { logicalName?: string }): Key { return ({ ...keyProps, _logicalType: 'AWS::KMS::Key' }) as unknown as Key }

export interface Key extends KloudResource {
    keyPolicy: Value<any>;
    description?: Value<string>;
    enableKeyRotation?: Value<boolean>;
    enabled?: Value<boolean>;
    keyUsage?: Value<string>;
    pendingWindowInDays?: Value<number>;
    tags?: Tag[];
}