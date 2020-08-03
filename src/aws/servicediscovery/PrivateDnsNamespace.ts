import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PrivateDnsNamespaceAttributes = { Id: Attribute<string>;Arn: Attribute<string> }
export function privateDnsNamespace(privateDnsNamespaceProps: PrivateDnsNamespace): PrivateDnsNamespace & {attributes: PrivateDnsNamespaceAttributes} { return ({ ...privateDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PrivateDnsNamespace', attributes: { Id: 'Id',Arn: 'Arn' } }) }
   
export interface PrivateDnsNamespace extends KloudResource {
  description?: Value<string>
  vpc: Value<string>
  tags?: Tag[]
  name: Value<string>
}