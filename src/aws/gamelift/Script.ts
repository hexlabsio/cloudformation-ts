import { Value } from '../../kloudformation/Value';
import { S3LocationProps } from './script/S3LocationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ScriptAttributes = { Id: Attribute<string>;Arn: Attribute<string> }
export function script(scriptProps: Script): Script & {attributes: ScriptAttributes} { return ({ ...scriptProps, _logicalType: 'AWS::GameLift::Script', attributes: { Id: 'Id',Arn: 'Arn' } }) }
   
export interface Script extends KloudResource {
  version?: Value<string>
  storageLocation: S3LocationProps
  name?: Value<string>
}