import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { EntryProps } from './prefixList/EntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PrefixListAttributes = { PrefixListId: Attribute<string>;OwnerId: Attribute<string>;Version: Attribute<number>;Arn: Attribute<string> }
export function prefixList(prefixListProps: PrefixList): PrefixList & {attributes: PrefixListAttributes} { return ({ ...prefixListProps, _logicalType: 'AWS::EC2::PrefixList', attributes: { PrefixListId: 'PrefixListId',OwnerId: 'OwnerId',Version: 'Version',Arn: 'Arn' } }) }
   
export interface PrefixList extends KloudResource {
  prefixListName: Value<string>
  addressFamily: Value<string>
  maxEntries: Value<number>
  tags?: Tag[]
  entries?: EntryProps[]
}