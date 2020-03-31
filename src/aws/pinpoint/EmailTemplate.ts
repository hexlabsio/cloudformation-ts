import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EmailTemplateAttributes = { Arn: Attribute<string> }
export function emailTemplate(emailTemplateProps: EmailTemplate): EmailTemplate & { attributes: EmailTemplateAttributes } { return ({ ...emailTemplateProps, _logicalType: 'AWS::Pinpoint::EmailTemplate', attributes: { Arn: 'Arn' } }) }

export interface EmailTemplate extends KloudResource {
    templateName: Value<string>;
    subject: Value<string>;
    htmlPart?: Value<string>;
    textPart?: Value<string>;
    templateDescription?: Value<string>;
    defaultSubstitutions?: Value<string>;
    tags?: Value<any>;
}