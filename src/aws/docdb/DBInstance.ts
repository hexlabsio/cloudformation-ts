import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBInstance(dBInstanceProps: DBInstance & { logicalName?: string }): DBInstance { return ({ ...dBInstanceProps, _logicalType: 'AWS::DocDB::DBInstance' }) as unknown as DBInstance }

export interface DBInstance extends KloudResource {
    dBInstanceClass: Value<string>;
    dBClusterIdentifier: Value<string>;
    availabilityZone?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    autoMinorVersionUpgrade?: Value<boolean>;
    dBInstanceIdentifier?: Value<string>;
    tags?: Tag[];
}