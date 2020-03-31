import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export function metricsConfigurationProps(metricsConfigurationPropsProps: MetricsConfigurationProps): MetricsConfigurationProps { return (metricsConfigurationPropsProps) }

export interface MetricsConfigurationProps {
    id: Value<string>;
    prefix?: Value<string>;
    tagFilters?: TagFilterProps[];
}