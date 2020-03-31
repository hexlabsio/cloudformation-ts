import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBClusterParameterGroupAttributes = {  }
export function dBClusterParameterGroup(dBClusterParameterGroupProps: DBClusterParameterGroup): DBClusterParameterGroup & { attributes: DBClusterParameterGroupAttributes } { return ({ ...dBClusterParameterGroupProps, _logicalType: 'AWS::RDS::DBClusterParameterGroup', attributes: {  } }) }

export interface DBClusterParameterGroup extends KloudResource {
    description: Value<string>;
    family: Value<string>;
    parameters: Value<any>;
    tags?: Tag[];
}