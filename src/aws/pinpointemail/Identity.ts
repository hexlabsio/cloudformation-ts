import { Value } from '../../kloudformation/Value';
import { TagsProps } from './identity/TagsProps';
import { MailFromAttributesProps } from './identity/MailFromAttributesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type IdentityAttributes = { IdentityDNSRecordName3: Attribute<string>; IdentityDNSRecordName1: Attribute<string>; IdentityDNSRecordName2: Attribute<string>; IdentityDNSRecordValue3: Attribute<string>; IdentityDNSRecordValue2: Attribute<string>; IdentityDNSRecordValue1: Attribute<string> }
export function identity(identityProps: Identity): Identity & { attributes: IdentityAttributes } { return ({ ...identityProps, _logicalType: 'AWS::PinpointEmail::Identity', attributes: { IdentityDNSRecordName3: 'IdentityDNSRecordName3', IdentityDNSRecordName1: 'IdentityDNSRecordName1', IdentityDNSRecordName2: 'IdentityDNSRecordName2', IdentityDNSRecordValue3: 'IdentityDNSRecordValue3', IdentityDNSRecordValue2: 'IdentityDNSRecordValue2', IdentityDNSRecordValue1: 'IdentityDNSRecordValue1' } }) }

export interface Identity extends KloudResource {
    name: Value<string>;
    feedbackForwardingEnabled?: Value<boolean>;
    dkimSigningEnabled?: Value<boolean>;
    tags?: TagsProps[];
    mailFromAttributes?: MailFromAttributesProps;
}