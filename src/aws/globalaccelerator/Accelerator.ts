import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AcceleratorAttributes = { DnsName: Attribute<string>;AcceleratorArn: Attribute<string> }
export function accelerator(acceleratorProps: Accelerator): Accelerator & {attributes: AcceleratorAttributes} { return ({ ...acceleratorProps, _logicalType: 'AWS::GlobalAccelerator::Accelerator', attributes: { DnsName: 'DnsName',AcceleratorArn: 'AcceleratorArn' } }) }
   
export interface Accelerator extends KloudResource {
  name: Value<string>
  ipAddressType?: Value<string>
  ipAddresses?: Value<Value<string>[]>
  enabled?: Value<boolean>
  tags?: Tag[]
}