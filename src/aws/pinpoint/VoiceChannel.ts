import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VoiceChannelAttributes = {  }
export function voiceChannel(voiceChannelProps: VoiceChannel): VoiceChannel & { attributes: VoiceChannelAttributes } { return ({ ...voiceChannelProps, _logicalType: 'AWS::Pinpoint::VoiceChannel', attributes: {  } }) }

export interface VoiceChannel extends KloudResource {
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}