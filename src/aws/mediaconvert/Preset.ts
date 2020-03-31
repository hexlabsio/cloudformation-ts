import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PresetAttributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function preset(presetProps: Preset): Preset & { attributes: PresetAttributes } { return ({ ...presetProps, _logicalType: 'AWS::MediaConvert::Preset', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface Preset extends KloudResource {
    settingsJson: Value<any>;
    category?: Value<string>;
    description?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}