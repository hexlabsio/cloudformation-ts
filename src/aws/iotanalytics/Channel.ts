import { Value } from '../../kloudformation/Value';
import { ChannelStorageProps } from './channel/ChannelStorageProps';
import { RetentionPeriodProps } from './channel/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function channel(channelProps: Channel & { logicalName?: string }): Channel { return ({ ...channelProps, _logicalType: 'AWS::IoTAnalytics::Channel' }) as unknown as Channel }

export interface Channel extends KloudResource {
    channelName?: Value<string>;
    channelStorage?: ChannelStorageProps;
    retentionPeriod?: RetentionPeriodProps;
    tags?: Tag[];
}