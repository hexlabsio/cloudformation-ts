import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityGroup(securityGroupProps: SecurityGroup): SecurityGroup { return ({ ...securityGroupProps, _logicalType: '' }) }
  
export interface SecurityGroup extends KloudResource {
  description: Value<string>
}