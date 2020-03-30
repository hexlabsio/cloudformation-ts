import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function replicationInstance(replicationInstanceProps: ReplicationInstance & { logicalName?: string }): ReplicationInstance { return ({ ...replicationInstanceProps, _logicalType: 'AWS::DMS::ReplicationInstance' }) as unknown as ReplicationInstance }

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