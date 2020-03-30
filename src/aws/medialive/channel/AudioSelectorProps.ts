import { AudioSelectorSettingsProps } from './AudioSelectorSettingsProps';
import { Value } from '../../../kloudformation/Value';

export function audioSelectorProps(audioSelectorPropsProps: AudioSelectorProps): AudioSelectorProps { return (audioSelectorPropsProps) as unknown as AudioSelectorProps }

export interface AudioSelectorProps {
    selectorSettings?: AudioSelectorSettingsProps;
    name?: Value<string>;
}