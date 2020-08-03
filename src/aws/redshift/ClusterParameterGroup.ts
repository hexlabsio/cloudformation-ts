import { Value } from '../../kloudformation/Value';
import { ParameterProps } from './clusterParameterGroup/ParameterProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clusterParameterGroup(clusterParameterGroupProps: ClusterParameterGroup): ClusterParameterGroup { return ({ ...clusterParameterGroupProps, _logicalType: '' }) }
  
export interface ClusterParameterGroup extends KloudResource {
  description: Value<string>
  parameterGroupFamily: Value<string>
  parameters?: ParameterProps[]
  tags?: Tag[]
}