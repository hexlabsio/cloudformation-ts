import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBParameterGroup(dBParameterGroupProps: DBParameterGroup & { logicalName?: string }): DBParameterGroup { return ({ ...dBParameterGroupProps, _logicalType: 'AWS::RDS::DBParameterGroup' }) as unknown as DBParameterGroup }

export interface DBParameterGroup extends KloudResource {
    description: Value<string>;
    family: Value<string>;
    parameters?: { [key: string]: Value<string> };
    tags?: Tag[];
}