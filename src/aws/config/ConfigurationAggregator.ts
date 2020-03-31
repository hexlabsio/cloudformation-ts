import { Value } from '../../kloudformation/Value';
import { AccountAggregationSourceProps } from './configurationaggregator/AccountAggregationSourceProps';
import { OrganizationAggregationSourceProps } from './configurationaggregator/OrganizationAggregationSourceProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationAggregatorAttributes = {  }
export function configurationAggregator(configurationAggregatorProps: ConfigurationAggregator): ConfigurationAggregator & { attributes: ConfigurationAggregatorAttributes } { return ({ ...configurationAggregatorProps, _logicalType: 'AWS::Config::ConfigurationAggregator', attributes: {  } }) }

export interface ConfigurationAggregator extends KloudResource {
    configurationAggregatorName: Value<string>;
    accountAggregationSources?: AccountAggregationSourceProps[];
    organizationAggregationSource?: OrganizationAggregationSourceProps;
    tags?: Tag[];
}