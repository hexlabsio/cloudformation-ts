import { Value } from '../../../kloudformation/Value';

export function inferenceAcceleratorProps(inferenceAcceleratorPropsProps: InferenceAcceleratorProps): InferenceAcceleratorProps { return (inferenceAcceleratorPropsProps) }

export interface InferenceAcceleratorProps {
    deviceName?: Value<string>;
    devicePolicy?: Value<string>;
    deviceType?: Value<string>;
}