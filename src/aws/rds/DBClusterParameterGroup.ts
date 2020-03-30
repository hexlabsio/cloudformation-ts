import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBClusterParameterGroup(dBClusterParameterGroupProps: DBClusterParameterGroup & { logicalName?: string }): DBClusterParameterGroup { return ({ ...dBClusterParameterGroupProps, _logicalType: 'AWS::RDS::DBClusterParameterGroup' }) as unknown as DBClusterParameterGroup }

export interface DBClusterParameterGroup extends KloudResource {
    description: Value<string>;
    family: Value<string>;
    parameters: Value<any>;
    tags?: Tag[];
}