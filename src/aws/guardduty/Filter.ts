import { Value } from '../../kloudformation/Value';
import { FindingCriteriaProps } from './filter/FindingCriteriaProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FilterAttributes = {  }
export function filter(filterProps: Filter): Filter & { attributes: FilterAttributes } { return ({ ...filterProps, _logicalType: 'AWS::GuardDuty::Filter', attributes: {  } }) }

export interface Filter extends KloudResource {
    action: Value<string>;
    description: Value<string>;
    detectorId: Value<string>;
    findingCriteria: FindingCriteriaProps;
    rank: Value<number>;
    name: Value<string>;
}