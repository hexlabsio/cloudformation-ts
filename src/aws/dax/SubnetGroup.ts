import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubnetGroupAttributes = {  }
export function subnetGroup(subnetGroupProps: SubnetGroup): SubnetGroup & { attributes: SubnetGroupAttributes } { return ({ ...subnetGroupProps, _logicalType: 'AWS::DAX::SubnetGroup', attributes: {  } }) }

export interface SubnetGroup extends KloudResource {
    subnetIds: Value<Value<string>[]>;
    description?: Value<string>;
    subnetGroupName?: Value<string>;
}