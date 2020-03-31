import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SmsTemplateAttributes = { Arn: Attribute<string> }
export function smsTemplate(smsTemplateProps: SmsTemplate): SmsTemplate & { attributes: SmsTemplateAttributes } { return ({ ...smsTemplateProps, _logicalType: 'AWS::Pinpoint::SmsTemplate', attributes: { Arn: 'Arn' } }) }

export interface SmsTemplate extends KloudResource {
    templateName: Value<string>;
    body: Value<string>;
    templateDescription?: Value<string>;
    defaultSubstitutions?: Value<string>;
    tags?: Value<any>;
}