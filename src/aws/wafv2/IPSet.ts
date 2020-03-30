import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function iPSet(iPSetProps: IPSet & { logicalName?: string }): IPSet { return ({ ...iPSetProps, _logicalType: 'AWS::WAFv2::IPSet' }) as unknown as IPSet }

export interface IPSet extends KloudResource {
    scope: Value<string>;
    iPAddressVersion: Value<string>;
    addresses: Value<Value<string>[]>;
    description?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}