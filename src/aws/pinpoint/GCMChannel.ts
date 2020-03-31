import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GCMChannelAttributes = {  }
export function gCMChannel(gCMChannelProps: GCMChannel): GCMChannel & { attributes: GCMChannelAttributes } { return ({ ...gCMChannelProps, _logicalType: 'AWS::Pinpoint::GCMChannel', attributes: {  } }) }

export interface GCMChannel extends KloudResource {
    apiKey: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}