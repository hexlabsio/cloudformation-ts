import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function gCMChannel(gCMChannelProps: GCMChannel & { logicalName?: string }): GCMChannel { return ({ ...gCMChannelProps, _logicalType: 'AWS::Pinpoint::GCMChannel' }) as unknown as GCMChannel }

export interface GCMChannel extends KloudResource {
    apiKey: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}