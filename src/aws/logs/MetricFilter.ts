import { Value } from '../../kloudformation/Value';
import { MetricTransformationProps } from './metricFilter/MetricTransformationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function metricFilter(metricFilterProps: MetricFilter): MetricFilter { return ({ ...metricFilterProps, _logicalType: '' }) }
  
export interface MetricFilter extends KloudResource {
  filterPattern: Value<string>
  logGroupName: Value<string>
  metricTransformations: MetricTransformationProps[]
}