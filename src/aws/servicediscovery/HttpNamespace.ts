import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type HttpNamespaceAttributes = { Id: Attribute<string>;Arn: Attribute<string> }
export function httpNamespace(httpNamespaceProps: HttpNamespace): HttpNamespace & {attributes: HttpNamespaceAttributes} { return ({ ...httpNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::HttpNamespace', attributes: { Id: 'Id',Arn: 'Arn' } }) }
   
export interface HttpNamespace extends KloudResource {
  description?: Value<string>
  tags?: Tag[]
  name: Value<string>
}