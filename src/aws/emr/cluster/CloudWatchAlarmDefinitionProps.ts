import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from './MetricDimensionProps';

export function cloudWatchAlarmDefinitionProps(cloudWatchAlarmDefinitionPropsProps: CloudWatchAlarmDefinitionProps): CloudWatchAlarmDefinitionProps { return (cloudWatchAlarmDefinitionPropsProps) as unknown as CloudWatchAlarmDefinitionProps }

export interface CloudWatchAlarmDefinitionProps {
    comparisonOperator: Value<string>;
    metricName: Value<string>;
    period: Value<number>;
    threshold: Value<number>;
    dimensions?: MetricDimensionProps[];
    evaluationPeriods?: Value<number>;
    namespace?: Value<string>;
    statistic?: Value<string>;
    unit?: Value<string>;
}