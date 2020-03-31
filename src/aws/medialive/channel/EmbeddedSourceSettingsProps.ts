import { Value } from '../../../kloudformation/Value';

export function embeddedSourceSettingsProps(embeddedSourceSettingsPropsProps: EmbeddedSourceSettingsProps): EmbeddedSourceSettingsProps { return (embeddedSourceSettingsPropsProps) }

export interface EmbeddedSourceSettingsProps {
    source608ChannelNumber?: Value<number>;
    scte20Detection?: Value<string>;
    source608TrackNumber?: Value<number>;
    convert608To708?: Value<string>;
}