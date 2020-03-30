import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function preset(presetProps: Preset & { logicalName?: string }): Preset { return ({ ...presetProps, _logicalType: 'AWS::MediaConvert::Preset' }) as unknown as Preset }

export interface Preset extends KloudResource {
    settingsJson: Value<any>;
    category?: Value<string>;
    description?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}