import { AudioSelectorSettingsProps } from './AudioSelectorSettingsProps';
import { Value } from '../../../kloudformation/Value';

export function audioSelectorProps(audioSelectorPropsProps: AudioSelectorProps): AudioSelectorProps { return (audioSelectorPropsProps) }

export interface AudioSelectorProps {
    selectorSettings?: AudioSelectorSettingsProps;
    name?: Value<string>;
}