import { Value } from '../../../kloudformation/Value';
import { CaptionSelectorSettingsProps } from './CaptionSelectorSettingsProps';

export function captionSelectorProps(captionSelectorPropsProps: CaptionSelectorProps): CaptionSelectorProps { return (captionSelectorPropsProps) as unknown as CaptionSelectorProps }

export interface CaptionSelectorProps {
    languageCode?: Value<string>;
    selectorSettings?: CaptionSelectorSettingsProps;
    name?: Value<string>;
}