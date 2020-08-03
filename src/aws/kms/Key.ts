import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type KeyAttributes = { Arn: Attribute<string> }
export function key(keyProps: Key): Key & {attributes: KeyAttributes} { return ({ ...keyProps, _logicalType: 'AWS::KMS::Key', attributes: { Arn: 'Arn' } }) }
   
export interface Key extends KloudResource {
  description?: Value<string>
  enableKeyRotation?: Value<boolean>
  enabled?: Value<boolean>
  keyPolicy: Value<any>
  keyUsage?: Value<string>
  pendingWindowInDays?: Value<number>
  tags?: Tag[]
}