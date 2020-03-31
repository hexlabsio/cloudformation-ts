import { Value } from '../../../kloudformation/Value';

export function audioLanguageSelectionProps(audioLanguageSelectionPropsProps: AudioLanguageSelectionProps): AudioLanguageSelectionProps { return (audioLanguageSelectionPropsProps) }

export interface AudioLanguageSelectionProps {
    languageCode?: Value<string>;
    languageSelectionPolicy?: Value<string>;
}