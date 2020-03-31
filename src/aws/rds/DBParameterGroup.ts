import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBParameterGroupAttributes = {  }
export function dBParameterGroup(dBParameterGroupProps: DBParameterGroup): DBParameterGroup & { attributes: DBParameterGroupAttributes } { return ({ ...dBParameterGroupProps, _logicalType: 'AWS::RDS::DBParameterGroup', attributes: {  } }) }

export interface DBParameterGroup extends KloudResource {
    description: Value<string>;
    family: Value<string>;
    parameters?: { [key: string]: Value<string> };
    tags?: Tag[];
}