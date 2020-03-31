import { Value } from '../../../kloudformation/Value';
import { StorageClassAnalysisProps } from './StorageClassAnalysisProps';
import { TagFilterProps } from './TagFilterProps';

export function analyticsConfigurationProps(analyticsConfigurationPropsProps: AnalyticsConfigurationProps): AnalyticsConfigurationProps { return (analyticsConfigurationPropsProps) }

export interface AnalyticsConfigurationProps {
    id: Value<string>;
    storageClassAnalysis: StorageClassAnalysisProps;
    prefix?: Value<string>;
    tagFilters?: TagFilterProps[];
}