import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBParameterGroupAttributes = {  }
export function dBParameterGroup(dBParameterGroupProps: DBParameterGroup): DBParameterGroup & { attributes: DBParameterGroupAttributes } { return ({ ...dBParameterGroupProps, _logicalType: 'AWS::Neptune::DBParameterGroup', attributes: {  } }) }

export interface DBParameterGroup extends KloudResource {
    description: Value<string>;
    parameters: Value<any>;
    family: Value<string>;
    tags?: Tag[];
    name?: Value<string>;
}