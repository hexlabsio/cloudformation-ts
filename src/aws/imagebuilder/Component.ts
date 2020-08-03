import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ComponentAttributes = { Arn: Attribute<string>;Type: Attribute<string>;Encrypted: Attribute<boolean> }
export function component(componentProps: Component): Component & {attributes: ComponentAttributes} { return ({ ...componentProps, _logicalType: 'AWS::ImageBuilder::Component', attributes: { Arn: 'Arn',Type: 'Type',Encrypted: 'Encrypted' } }) }
   
export interface Component extends KloudResource {
  name: Value<string>
  version: Value<string>
  description?: Value<string>
  changeDescription?: Value<string>
  platform: Value<string>
  data?: Value<string>
  kmsKeyId?: Value<string>
  tags?: Value<Value<string>[]>
  uri?: Value<string>
  supportedOsVersions?: Value<Value<string>[]>
}