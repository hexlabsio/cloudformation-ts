import { AudioPidSelectionProps } from './AudioPidSelectionProps';
import { AudioLanguageSelectionProps } from './AudioLanguageSelectionProps';

export function audioSelectorSettingsProps(audioSelectorSettingsPropsProps: AudioSelectorSettingsProps): AudioSelectorSettingsProps { return (audioSelectorSettingsPropsProps) as unknown as AudioSelectorSettingsProps }

export interface AudioSelectorSettingsProps {
    audioPidSelection?: AudioPidSelectionProps;
    audioLanguageSelection?: AudioLanguageSelectionProps;
}