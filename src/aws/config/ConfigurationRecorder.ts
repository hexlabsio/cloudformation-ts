import { Value } from '../../kloudformation/Value';
import { RecordingGroupProps } from './configurationRecorder/RecordingGroupProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function configurationRecorder(configurationRecorderProps: ConfigurationRecorder): ConfigurationRecorder { return ({ ...configurationRecorderProps, _logicalType: '' }) }
  
export interface ConfigurationRecorder extends KloudResource {
  name?: Value<string>
  recordingGroup?: RecordingGroupProps
  roleARN: Value<string>
}