import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ReplicationInstanceAttributes = { ReplicationInstancePublicIpAddresses: Attribute<Value<string>[]>; ReplicationInstancePrivateIpAddresses: Attribute<Value<string>[]> }
export function replicationInstance(replicationInstanceProps: ReplicationInstance): ReplicationInstance & { attributes: ReplicationInstanceAttributes } { return ({ ...replicationInstanceProps, _logicalType: 'AWS::DMS::ReplicationInstance', attributes: { ReplicationInstancePublicIpAddresses: 'ReplicationInstancePublicIpAddresses', ReplicationInstancePrivateIpAddresses: 'ReplicationInstancePrivateIpAddresses' } }) }

export interface ReplicationInstance extends KloudResource {
    replicationInstanceClass: Value<string>;
    replicationInstanceIdentifier?: Value<string>;
    engineVersion?: Value<string>;
    kmsKeyId?: Value<string>;
    availabilityZone?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    autoMinorVersionUpgrade?: Value<boolean>;
    replicationSubnetGroupIdentifier?: Value<string>;
    allocatedStorage?: Value<number>;
    vpcSecurityGroupIds?: Value<Value<string>[]>;
    allowMajorVersionUpgrade?: Value<boolean>;
    publiclyAccessible?: Value<boolean>;
    multiAZ?: Value<boolean>;
    tags?: Tag[];
}