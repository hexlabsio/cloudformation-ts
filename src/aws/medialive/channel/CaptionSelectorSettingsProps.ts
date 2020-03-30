import { DvbSubSourceSettingsProps } from './DvbSubSourceSettingsProps';
import { Scte27SourceSettingsProps } from './Scte27SourceSettingsProps';
import { AribSourceSettingsProps } from './AribSourceSettingsProps';
import { EmbeddedSourceSettingsProps } from './EmbeddedSourceSettingsProps';
import { Scte20SourceSettingsProps } from './Scte20SourceSettingsProps';
import { TeletextSourceSettingsProps } from './TeletextSourceSettingsProps';

export function captionSelectorSettingsProps(captionSelectorSettingsPropsProps: CaptionSelectorSettingsProps): CaptionSelectorSettingsProps { return (captionSelectorSettingsPropsProps) as unknown as CaptionSelectorSettingsProps }

export interface CaptionSelectorSettingsProps {
    dvbSubSourceSettings?: DvbSubSourceSettingsProps;
    scte27SourceSettings?: Scte27SourceSettingsProps;
    aribSourceSettings?: AribSourceSettingsProps;
    embeddedSourceSettings?: EmbeddedSourceSettingsProps;
    scte20SourceSettings?: Scte20SourceSettingsProps;
    teletextSourceSettings?: TeletextSourceSettingsProps;
}