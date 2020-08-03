import { DefaultActionProps } from './webACL/DefaultActionProps';
import { Value } from '../../kloudformation/Value';
import { RuleProps } from './webACL/RuleProps';
import { VisibilityConfigProps } from './webACL/VisibilityConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type WebACLAttributes = { Arn: Attribute<string>;Capacity: Attribute<number>;Id: Attribute<string> }
export function webACL(webACLProps: WebACL): WebACL & {attributes: WebACLAttributes} { return ({ ...webACLProps, _logicalType: 'AWS::WAFv2::WebACL', attributes: { Arn: 'Arn',Capacity: 'Capacity',Id: 'Id' } }) }
   
export interface WebACL extends KloudResource {
  defaultAction: DefaultActionProps
  description?: Value<string>
  name?: Value<string>
  scope: Value<string>
  rules?: RuleProps[]
  visibilityConfig: VisibilityConfigProps
  tags?: Tag[]
}