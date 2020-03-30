import { Value } from '../../kloudformation/Value';
import { AccountAggregationSourceProps } from './configurationaggregator/AccountAggregationSourceProps';
import { OrganizationAggregationSourceProps } from './configurationaggregator/OrganizationAggregationSourceProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationAggregator(configurationAggregatorProps: ConfigurationAggregator & { logicalName?: string }): ConfigurationAggregator { return ({ ...configurationAggregatorProps, _logicalType: 'AWS::Config::ConfigurationAggregator' }) as unknown as ConfigurationAggregator }

export interface ConfigurationAggregator extends KloudResource {
    configurationAggregatorName: Value<string>;
    accountAggregationSources?: AccountAggregationSourceProps[];
    organizationAggregationSource?: OrganizationAggregationSourceProps;
    tags?: Tag[];
}