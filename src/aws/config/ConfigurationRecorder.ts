import { Value } from '../../kloudformation/Value';
import { RecordingGroupProps } from './configurationrecorder/RecordingGroupProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationRecorderAttributes = {  }
export function configurationRecorder(configurationRecorderProps: ConfigurationRecorder): ConfigurationRecorder & { attributes: ConfigurationRecorderAttributes } { return ({ ...configurationRecorderProps, _logicalType: 'AWS::Config::ConfigurationRecorder', attributes: {  } }) }

export interface ConfigurationRecorder extends KloudResource {
    roleARN: Value<string>;
    name?: Value<string>;
    recordingGroup?: RecordingGroupProps;
}