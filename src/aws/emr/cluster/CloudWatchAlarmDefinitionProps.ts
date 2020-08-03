import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from './MetricDimensionProps';

export interface CloudWatchAlarmDefinitionProps {
  comparisonOperator: Value<string>
  dimensions?: MetricDimensionProps[]
  evaluationPeriods?: Value<number>
  metricName: Value<string>
  namespace?: Value<string>
  period: Value<number>
  statistic?: Value<string>
  threshold: Value<number>
  unit?: Value<string>
}