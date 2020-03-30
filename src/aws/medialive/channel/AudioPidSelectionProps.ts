import { Value } from '../../../kloudformation/Value';

export function audioPidSelectionProps(audioPidSelectionPropsProps: AudioPidSelectionProps): AudioPidSelectionProps { return (audioPidSelectionPropsProps) as unknown as AudioPidSelectionProps }

export interface AudioPidSelectionProps {
    pid?: Value<number>;
}