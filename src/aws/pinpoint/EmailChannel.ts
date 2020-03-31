import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EmailChannelAttributes = {  }
export function emailChannel(emailChannelProps: EmailChannel): EmailChannel & { attributes: EmailChannelAttributes } { return ({ ...emailChannelProps, _logicalType: 'AWS::Pinpoint::EmailChannel', attributes: {  } }) }

export interface EmailChannel extends KloudResource {
    fromAddress: Value<string>;
    applicationId: Value<string>;
    identity: Value<string>;
    configurationSet?: Value<string>;
    enabled?: Value<boolean>;
    roleArn?: Value<string>;
}