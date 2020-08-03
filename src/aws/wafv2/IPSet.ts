import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type IPSetAttributes = { Arn: Attribute<string>;Id: Attribute<string> }
export function iPSet(iPSetProps: IPSet): IPSet & {attributes: IPSetAttributes} { return ({ ...iPSetProps, _logicalType: 'AWS::WAFv2::IPSet', attributes: { Arn: 'Arn',Id: 'Id' } }) }
   
export interface IPSet extends KloudResource {
  description?: Value<string>
  name?: Value<string>
  scope: Value<string>
  iPAddressVersion: Value<string>
  addresses: Value<Value<string>[]>
  tags?: Tag[]
}