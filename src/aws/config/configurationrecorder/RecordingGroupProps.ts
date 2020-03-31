import { Value } from '../../../kloudformation/Value';

export function recordingGroupProps(recordingGroupPropsProps: RecordingGroupProps): RecordingGroupProps { return (recordingGroupPropsProps) }

export interface RecordingGroupProps {
    allSupported?: Value<boolean>;
    includeGlobalResourceTypes?: Value<boolean>;
    resourceTypes?: Value<Value<string>[]>;
}