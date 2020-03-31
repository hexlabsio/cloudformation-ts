import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type IPSetAttributes = { Arn: Attribute<string>; Id: Attribute<string> }
export function iPSet(iPSetProps: IPSet): IPSet & { attributes: IPSetAttributes } { return ({ ...iPSetProps, _logicalType: 'AWS::WAFv2::IPSet', attributes: { Arn: 'Arn', Id: 'Id' } }) }

export interface IPSet extends KloudResource {
    scope: Value<string>;
    iPAddressVersion: Value<string>;
    addresses: Value<Value<string>[]>;
    description?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}