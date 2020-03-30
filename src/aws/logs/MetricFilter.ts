import { Value } from '../../kloudformation/Value';
import { MetricTransformationProps } from './metricfilter/MetricTransformationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function metricFilter(metricFilterProps: MetricFilter & { logicalName?: string }): MetricFilter { return ({ ...metricFilterProps, _logicalType: 'AWS::Logs::MetricFilter' }) as unknown as MetricFilter }

export interface MetricFilter extends KloudResource {
    filterPattern: Value<string>;
    logGroupName: Value<string>;
    metricTransformations: MetricTransformationProps[];
}