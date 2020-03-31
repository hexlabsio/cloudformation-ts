import { Value } from '../../kloudformation/Value';
import { ParameterProps } from './clusterparametergroup/ParameterProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClusterParameterGroupAttributes = {  }
export function clusterParameterGroup(clusterParameterGroupProps: ClusterParameterGroup): ClusterParameterGroup & { attributes: ClusterParameterGroupAttributes } { return ({ ...clusterParameterGroupProps, _logicalType: 'AWS::Redshift::ClusterParameterGroup', attributes: {  } }) }

export interface ClusterParameterGroup extends KloudResource {
    description: Value<string>;
    parameterGroupFamily: Value<string>;
    parameters?: ParameterProps[];
    tags?: Tag[];
}