import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PresetAttributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function preset(presetProps: Preset): Preset & {attributes: PresetAttributes} { return ({ ...presetProps, _logicalType: 'AWS::MediaConvert::Preset', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface Preset extends KloudResource {
  category?: Value<string>
  description?: Value<string>
  settingsJson: Value<any>
  tags?: Value<any>
  name?: Value<string>
}