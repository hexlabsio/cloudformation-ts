import { Value } from '../../../kloudformation/Value';

export function channelProps(channelPropsProps: ChannelProps): ChannelProps { return (channelPropsProps) as unknown as ChannelProps }

export interface ChannelProps {
    channelName?: Value<string>;
    next?: Value<string>;
    name?: Value<string>;
}