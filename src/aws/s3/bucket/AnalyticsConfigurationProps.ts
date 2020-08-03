import { Value } from '../../../kloudformation/Value';
import { StorageClassAnalysisProps } from './StorageClassAnalysisProps';
import { TagFilterProps } from './TagFilterProps';

export interface AnalyticsConfigurationProps {
  id: Value<string>
  prefix?: Value<string>
  storageClassAnalysis: StorageClassAnalysisProps
  tagFilters?: TagFilterProps[]
}