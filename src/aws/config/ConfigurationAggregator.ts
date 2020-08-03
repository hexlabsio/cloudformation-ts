import { AccountAggregationSourceProps } from './configurationAggregator/AccountAggregationSourceProps';
import { Value } from '../../kloudformation/Value';
import { OrganizationAggregationSourceProps } from './configurationAggregator/OrganizationAggregationSourceProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function configurationAggregator(configurationAggregatorProps: ConfigurationAggregator): ConfigurationAggregator { return ({ ...configurationAggregatorProps, _logicalType: '' }) }
  
export interface ConfigurationAggregator extends KloudResource {
  accountAggregationSources?: AccountAggregationSourceProps[]
  configurationAggregatorName: Value<string>
  organizationAggregationSource?: OrganizationAggregationSourceProps
  tags?: Tag[]
}