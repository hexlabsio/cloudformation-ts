import { Value } from '../../../kloudformation/Value';
import { RangeProps } from './RangeProps';

export interface ConfigurationProps {
  metricTimeZone?: Value<string>
  excludedTimeRanges?: RangeProps[]
}