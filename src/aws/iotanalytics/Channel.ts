import { Value } from '../../kloudformation/Value';
import { ChannelStorageProps } from './channel/ChannelStorageProps';
import { RetentionPeriodProps } from './channel/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ChannelAttributes = {  }
export function channel(channelProps: Channel): Channel & { attributes: ChannelAttributes } { return ({ ...channelProps, _logicalType: 'AWS::IoTAnalytics::Channel', attributes: {  } }) }

export interface Channel extends KloudResource {
    channelName?: Value<string>;
    channelStorage?: ChannelStorageProps;
    retentionPeriod?: RetentionPeriodProps;
    tags?: Tag[];
}