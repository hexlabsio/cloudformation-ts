import { IngressProps } from './dBSecurityGroup/IngressProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dBSecurityGroup(dBSecurityGroupProps: DBSecurityGroup): DBSecurityGroup { return ({ ...dBSecurityGroupProps, _logicalType: '' }) }
  
export interface DBSecurityGroup extends KloudResource {
  dBSecurityGroupIngress: IngressProps[]
  eC2VpcId?: Value<string>
  groupDescription: Value<string>
  tags?: Tag[]
}