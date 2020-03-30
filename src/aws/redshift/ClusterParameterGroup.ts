import { Value } from '../../kloudformation/Value';
import { ParameterProps } from './clusterparametergroup/ParameterProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clusterParameterGroup(clusterParameterGroupProps: ClusterParameterGroup & { logicalName?: string }): ClusterParameterGroup { return ({ ...clusterParameterGroupProps, _logicalType: 'AWS::Redshift::ClusterParameterGroup' }) as unknown as ClusterParameterGroup }

export interface ClusterParameterGroup extends KloudResource {
    description: Value<string>;
    parameterGroupFamily: Value<string>;
    parameters?: ParameterProps[];
    tags?: Tag[];
}