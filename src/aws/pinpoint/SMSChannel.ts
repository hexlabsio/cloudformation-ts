import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function sMSChannel(sMSChannelProps: SMSChannel & { logicalName?: string }): SMSChannel { return ({ ...sMSChannelProps, _logicalType: 'AWS::Pinpoint::SMSChannel' }) as unknown as SMSChannel }

export interface SMSChannel extends KloudResource {
    applicationId: Value<string>;
    shortCode?: Value<string>;
    enabled?: Value<boolean>;
    senderId?: Value<string>;
}