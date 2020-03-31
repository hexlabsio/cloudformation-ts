import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DBInstanceAttributes = { Endpoint: Attribute<string>; Port: Attribute<string> }
export function dBInstance(dBInstanceProps: DBInstance): DBInstance & { attributes: DBInstanceAttributes } { return ({ ...dBInstanceProps, _logicalType: 'AWS::Neptune::DBInstance', attributes: { Endpoint: 'Endpoint', Port: 'Port' } }) }

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