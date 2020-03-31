import { Value } from '../../kloudformation/Value';
import { MetricTransformationProps } from './metricfilter/MetricTransformationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MetricFilterAttributes = {  }
export function metricFilter(metricFilterProps: MetricFilter): MetricFilter & { attributes: MetricFilterAttributes } { return ({ ...metricFilterProps, _logicalType: 'AWS::Logs::MetricFilter', attributes: {  } }) }

export interface MetricFilter extends KloudResource {
    filterPattern: Value<string>;
    logGroupName: Value<string>;
    metricTransformations: MetricTransformationProps[];
}