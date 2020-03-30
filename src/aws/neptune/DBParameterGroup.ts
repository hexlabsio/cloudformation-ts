import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBParameterGroup(dBParameterGroupProps: DBParameterGroup & { logicalName?: string }): DBParameterGroup { return ({ ...dBParameterGroupProps, _logicalType: 'AWS::Neptune::DBParameterGroup' }) as unknown as DBParameterGroup }

export interface DBParameterGroup extends KloudResource {
    description: Value<string>;
    parameters: Value<any>;
    family: Value<string>;
    tags?: Tag[];
    name?: Value<string>;
}