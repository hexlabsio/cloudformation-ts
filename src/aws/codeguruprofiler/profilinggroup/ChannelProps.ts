import { Value } from '../../../kloudformation/Value';

export interface ChannelProps {
  channelId?: Value<string>
  channelUri: Value<string>
}