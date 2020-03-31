import { Value } from '../../../kloudformation/Value';
import { VideoSelectorProps } from './VideoSelectorProps';
import { AudioSelectorProps } from './AudioSelectorProps';
import { CaptionSelectorProps } from './CaptionSelectorProps';
import { NetworkInputSettingsProps } from './NetworkInputSettingsProps';

export function inputSettingsProps(inputSettingsPropsProps: InputSettingsProps): InputSettingsProps { return (inputSettingsPropsProps) }

export interface InputSettingsProps {
    deblockFilter?: Value<string>;
    filterStrength?: Value<number>;
    inputFilter?: Value<string>;
    sourceEndBehavior?: Value<string>;
    videoSelector?: VideoSelectorProps;
    audioSelectors?: AudioSelectorProps[];
    captionSelectors?: CaptionSelectorProps[];
    denoiseFilter?: Value<string>;
    networkInputSettings?: NetworkInputSettingsProps;
}