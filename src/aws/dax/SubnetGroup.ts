import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnetGroup(subnetGroupProps: SubnetGroup & { logicalName?: string }): SubnetGroup { return ({ ...subnetGroupProps, _logicalType: 'AWS::DAX::SubnetGroup' }) as unknown as SubnetGroup }

export interface SubnetGroup extends KloudResource {
    subnetIds: Value<Value<string>[]>;
    description?: Value<string>;
    subnetGroupName?: Value<string>;
}