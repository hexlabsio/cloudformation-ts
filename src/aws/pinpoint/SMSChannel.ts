import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SMSChannelAttributes = {  }
export function sMSChannel(sMSChannelProps: SMSChannel): SMSChannel & { attributes: SMSChannelAttributes } { return ({ ...sMSChannelProps, _logicalType: 'AWS::Pinpoint::SMSChannel', attributes: {  } }) }

export interface SMSChannel extends KloudResource {
    applicationId: Value<string>;
    shortCode?: Value<string>;
    enabled?: Value<boolean>;
    senderId?: Value<string>;
}