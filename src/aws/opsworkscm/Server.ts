import { Value } from '../../kloudformation/Value';
import { EngineAttributeProps } from './server/EngineAttributeProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ServerAttributes = { Endpoint: Attribute<string>;Arn: Attribute<string> }
export function server(serverProps: Server): Server & {attributes: ServerAttributes} { return ({ ...serverProps, _logicalType: 'AWS::OpsWorksCM::Server', attributes: { Endpoint: 'Endpoint',Arn: 'Arn' } }) }
   
export interface Server extends KloudResource {
  keyPair?: Value<string>
  engineVersion?: Value<string>
  serviceRoleArn: Value<string>
  disableAutomatedBackup?: Value<boolean>
  backupId?: Value<string>
  engineModel?: Value<string>
  preferredMaintenanceWindow?: Value<string>
  associatePublicIpAddress?: Value<boolean>
  instanceProfileArn: Value<string>
  customCertificate?: Value<string>
  preferredBackupWindow?: Value<string>
  securityGroupIds?: Value<Value<string>[]>
  subnetIds?: Value<Value<string>[]>
  customDomain?: Value<string>
  customPrivateKey?: Value<string>
  serverName?: Value<string>
  engineAttributes?: EngineAttributeProps[]
  backupRetentionCount?: Value<number>
  instanceType: Value<string>
  tags?: Tag[]
  engine?: Value<string>
}