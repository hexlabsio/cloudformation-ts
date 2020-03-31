import { Value } from '../../../kloudformation/Value';
import { RangeProps } from './RangeProps';

export function configurationProps(configurationPropsProps: ConfigurationProps): ConfigurationProps { return (configurationPropsProps) }

export interface ConfigurationProps {
    metricTimeZone?: Value<string>;
    excludedTimeRanges?: RangeProps[];
}