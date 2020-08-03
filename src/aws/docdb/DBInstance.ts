import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DBInstanceAttributes = { Endpoint: Attribute<string>;Port: Attribute<string> }
export function dBInstance(dBInstanceProps: DBInstance): DBInstance & {attributes: DBInstanceAttributes} { return ({ ...dBInstanceProps, _logicalType: 'AWS::DocDB::DBInstance', attributes: { Endpoint: 'Endpoint',Port: 'Port' } }) }
   
export interface DBInstance extends KloudResource {
  dBInstanceClass: Value<string>
  dBClusterIdentifier: Value<string>
  availabilityZone?: Value<string>
  preferredMaintenanceWindow?: Value<string>
  autoMinorVersionUpgrade?: Value<boolean>
  dBInstanceIdentifier?: Value<string>
  tags?: Tag[]
}