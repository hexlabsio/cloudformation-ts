import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ResourceShareAttributes = { Arn: Attribute<string> }
export function resourceShare(resourceShareProps: ResourceShare): ResourceShare & {attributes: ResourceShareAttributes} { return ({ ...resourceShareProps, _logicalType: 'AWS::RAM::ResourceShare', attributes: { Arn: 'Arn' } }) }
   
export interface ResourceShare extends KloudResource {
  principals?: Value<Value<string>[]>
  allowExternalPrincipals?: Value<boolean>
  resourceArns?: Value<Value<string>[]>
  tags?: Tag[]
  name: Value<string>
}