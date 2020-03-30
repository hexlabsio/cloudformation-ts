import { Value } from '../../../kloudformation/Value';
import { RangeProps } from './RangeProps';

export function configurationProps(configurationPropsProps: ConfigurationProps): ConfigurationProps { return (configurationPropsProps) as unknown as ConfigurationProps }

export interface ConfigurationProps {
    metricTimeZone?: Value<string>;
    excludedTimeRanges?: RangeProps[];
}