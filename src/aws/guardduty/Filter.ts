import { Value } from '../../kloudformation/Value';
import { FindingCriteriaProps } from './filter/FindingCriteriaProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function filter(filterProps: Filter): Filter { return ({ ...filterProps, _logicalType: '' }) }
  
export interface Filter extends KloudResource {
  action: Value<string>
  description: Value<string>
  detectorId: Value<string>
  findingCriteria: FindingCriteriaProps
  rank: Value<number>
  name: Value<string>
}