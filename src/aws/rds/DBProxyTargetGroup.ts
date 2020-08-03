import { Value } from '../../kloudformation/Value';
import { ConnectionPoolConfigurationInfoFormatProps } from './dBProxyTargetGroup/ConnectionPoolConfigurationInfoFormatProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DBProxyTargetGroupAttributes = { TargetGroupArn: Attribute<string> }
export function dBProxyTargetGroup(dBProxyTargetGroupProps: DBProxyTargetGroup): DBProxyTargetGroup & {attributes: DBProxyTargetGroupAttributes} { return ({ ...dBProxyTargetGroupProps, _logicalType: 'AWS::RDS::DBProxyTargetGroup', attributes: { TargetGroupArn: 'TargetGroupArn' } }) }
   
export interface DBProxyTargetGroup extends KloudResource {
  dBProxyName: Value<string>
  targetGroupName: Value<string>
  connectionPoolConfigurationInfo?: ConnectionPoolConfigurationInfoFormatProps
  dBInstanceIdentifiers?: Value<Value<string>[]>
  dBClusterIdentifiers?: Value<Value<string>[]>
}