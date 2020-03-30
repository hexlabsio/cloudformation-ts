import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function emailChannel(emailChannelProps: EmailChannel & { logicalName?: string }): EmailChannel { return ({ ...emailChannelProps, _logicalType: 'AWS::Pinpoint::EmailChannel' }) as unknown as EmailChannel }

export interface EmailChannel extends KloudResource {
    fromAddress: Value<string>;
    applicationId: Value<string>;
    identity: Value<string>;
    configurationSet?: Value<string>;
    enabled?: Value<boolean>;
    roleArn?: Value<string>;
}