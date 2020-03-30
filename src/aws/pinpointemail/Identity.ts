import { Value } from '../../kloudformation/Value';
import { TagsProps } from './identity/TagsProps';
import { MailFromAttributesProps } from './identity/MailFromAttributesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function identity(identityProps: Identity & { logicalName?: string }): Identity { return ({ ...identityProps, _logicalType: 'AWS::PinpointEmail::Identity' }) as unknown as Identity }

export interface Identity extends KloudResource {
    name: Value<string>;
    feedbackForwardingEnabled?: Value<boolean>;
    dkimSigningEnabled?: Value<boolean>;
    tags?: TagsProps[];
    mailFromAttributes?: MailFromAttributesProps;
}