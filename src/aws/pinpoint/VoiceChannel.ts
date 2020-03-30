import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function voiceChannel(voiceChannelProps: VoiceChannel & { logicalName?: string }): VoiceChannel { return ({ ...voiceChannelProps, _logicalType: 'AWS::Pinpoint::VoiceChannel' }) as unknown as VoiceChannel }

export interface VoiceChannel extends KloudResource {
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}