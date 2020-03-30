import { Value } from '../../../kloudformation/Value';

export function audioLanguageSelectionProps(audioLanguageSelectionPropsProps: AudioLanguageSelectionProps): AudioLanguageSelectionProps { return (audioLanguageSelectionPropsProps) as unknown as AudioLanguageSelectionProps }

export interface AudioLanguageSelectionProps {
    languageCode?: Value<string>;
    languageSelectionPolicy?: Value<string>;
}