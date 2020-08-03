import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PublicDnsNamespaceAttributes = { Id: Attribute<string>;Arn: Attribute<string> }
export function publicDnsNamespace(publicDnsNamespaceProps: PublicDnsNamespace): PublicDnsNamespace & {attributes: PublicDnsNamespaceAttributes} { return ({ ...publicDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PublicDnsNamespace', attributes: { Id: 'Id',Arn: 'Arn' } }) }
   
export interface PublicDnsNamespace extends KloudResource {
  description?: Value<string>
  tags?: Tag[]
  name: Value<string>
}