import { Value } from '../../kloudformation/Value';
import { FindingCriteriaProps } from './findingsFilter/FindingCriteriaProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FindingsFilterAttributes = { Id: Attribute<string>;Arn: Attribute<string>;FindingsFilterListItems: Attribute<any[][]> }
export function findingsFilter(findingsFilterProps: FindingsFilter): FindingsFilter & {attributes: FindingsFilterAttributes} { return ({ ...findingsFilterProps, _logicalType: 'AWS::Macie::FindingsFilter', attributes: { Id: 'Id',Arn: 'Arn',FindingsFilterListItems: 'FindingsFilterListItems' } }) }
   
export interface FindingsFilter extends KloudResource {
  name: Value<string>
  description?: Value<string>
  findingCriteria: FindingCriteriaProps
  action?: Value<string>
  position?: Value<number>
}