import { AuthFormatProps } from './dBProxy/AuthFormatProps';
import { Value } from '../../kloudformation/Value';
import { TagFormatProps } from './dBProxy/TagFormatProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DBProxyAttributes = { DBProxyArn: Attribute<string>;Endpoint: Attribute<string> }
export function dBProxy(dBProxyProps: DBProxy): DBProxy & {attributes: DBProxyAttributes} { return ({ ...dBProxyProps, _logicalType: 'AWS::RDS::DBProxy', attributes: { DBProxyArn: 'DBProxyArn',Endpoint: 'Endpoint' } }) }
   
export interface DBProxy extends KloudResource {
  auth: AuthFormatProps[]
  dBProxyName: Value<string>
  debugLogging?: Value<boolean>
  engineFamily: Value<string>
  idleClientTimeout?: Value<number>
  requireTLS?: Value<boolean>
  roleArn: Value<string>
  tags?: TagFormatProps[]
  vpcSecurityGroupIds?: Value<Value<string>[]>
  vpcSubnetIds: Value<Value<string>[]>
}