import { Value } from '../../kloudformation/Value';
import { RecordingGroupProps } from './configurationrecorder/RecordingGroupProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationRecorder(configurationRecorderProps: ConfigurationRecorder & { logicalName?: string }): ConfigurationRecorder { return ({ ...configurationRecorderProps, _logicalType: 'AWS::Config::ConfigurationRecorder' }) as unknown as ConfigurationRecorder }

export interface ConfigurationRecorder extends KloudResource {
    roleARN: Value<string>;
    name?: Value<string>;
    recordingGroup?: RecordingGroupProps;
}