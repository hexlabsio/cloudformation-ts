import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBInstance(dBInstanceProps: DBInstance & { logicalName?: string }): DBInstance { return ({ ...dBInstanceProps, _logicalType: 'AWS::Neptune::DBInstance' }) as unknown as DBInstance }

export interface DBInstance extends KloudResource {
    dBInstanceClass: Value<string>;
    dBParameterGroupName?: Value<string>;
    allowMajorVersionUpgrade?: Value<boolean>;
    dBClusterIdentifier?: Value<string>;
    availabilityZone?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    autoMinorVersionUpgrade?: Value<boolean>;
    dBSubnetGroupName?: Value<string>;
    dBInstanceIdentifier?: Value<string>;
    dBSnapshotIdentifier?: Value<string>;
    tags?: Tag[];
}