import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function emailTemplate(emailTemplateProps: EmailTemplate & { logicalName?: string }): EmailTemplate { return ({ ...emailTemplateProps, _logicalType: 'AWS::Pinpoint::EmailTemplate' }) as unknown as EmailTemplate }

export interface EmailTemplate extends KloudResource {
    templateName: Value<string>;
    subject: Value<string>;
    htmlPart?: Value<string>;
    textPart?: Value<string>;
    templateDescription?: Value<string>;
    defaultSubstitutions?: Value<string>;
    tags?: Value<any>;
}