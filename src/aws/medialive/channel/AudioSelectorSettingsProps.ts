import { AudioPidSelectionProps } from './AudioPidSelectionProps';
import { AudioLanguageSelectionProps } from './AudioLanguageSelectionProps';

export function audioSelectorSettingsProps(audioSelectorSettingsPropsProps: AudioSelectorSettingsProps): AudioSelectorSettingsProps { return (audioSelectorSettingsPropsProps) }

export interface AudioSelectorSettingsProps {
    audioPidSelection?: AudioPidSelectionProps;
    audioLanguageSelection?: AudioLanguageSelectionProps;
}