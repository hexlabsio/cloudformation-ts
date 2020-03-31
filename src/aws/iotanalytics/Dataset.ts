import { ActionProps } from './dataset/ActionProps';
import { Value } from '../../kloudformation/Value';
import { DatasetContentDeliveryRuleProps } from './dataset/DatasetContentDeliveryRuleProps';
import { TriggerProps } from './dataset/TriggerProps';
import { VersioningConfigurationProps } from './dataset/VersioningConfigurationProps';
import { RetentionPeriodProps } from './dataset/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DatasetAttributes = {  }
export function dataset(datasetProps: Dataset): Dataset & { attributes: DatasetAttributes } { return ({ ...datasetProps, _logicalType: 'AWS::IoTAnalytics::Dataset', attributes: {  } }) }

export interface Dataset extends KloudResource {
    actions: ActionProps[];
    datasetName?: Value<string>;
    contentDeliveryRules?: DatasetContentDeliveryRuleProps[];
    triggers?: TriggerProps[];
    versioningConfiguration?: VersioningConfigurationProps;
    retentionPeriod?: RetentionPeriodProps;
    tags?: Tag[];
}