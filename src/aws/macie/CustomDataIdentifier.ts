import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CustomDataIdentifierAttributes = { Id: Attribute<string>;Arn: Attribute<string>;CreatedAt: Attribute<string>;Deleted: Attribute<boolean> }
export function customDataIdentifier(customDataIdentifierProps: CustomDataIdentifier): CustomDataIdentifier & {attributes: CustomDataIdentifierAttributes} { return ({ ...customDataIdentifierProps, _logicalType: 'AWS::Macie::CustomDataIdentifier', attributes: { Id: 'Id',Arn: 'Arn',CreatedAt: 'CreatedAt',Deleted: 'Deleted' } }) }
   
export interface CustomDataIdentifier extends KloudResource {
  name: Value<string>
  description?: Value<string>
  regex: Value<string>
  maximumMatchDistance?: Value<number>
  keywords?: Value<Value<string>[]>
  ignoreWords?: Value<Value<string>[]>
}