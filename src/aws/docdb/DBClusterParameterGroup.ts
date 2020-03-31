import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBClusterParameterGroupAttributes = {  }
export function dBClusterParameterGroup(dBClusterParameterGroupProps: DBClusterParameterGroup): DBClusterParameterGroup & { attributes: DBClusterParameterGroupAttributes } { return ({ ...dBClusterParameterGroupProps, _logicalType: 'AWS::DocDB::DBClusterParameterGroup', attributes: {  } }) }

export interface DBClusterParameterGroup extends KloudResource {
    description: Value<string>;
    parameters: Value<any>;
    family: Value<string>;
    tags?: Tag[];
    name?: Value<string>;
}