import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function smsTemplate(smsTemplateProps: SmsTemplate & { logicalName?: string }): SmsTemplate { return ({ ...smsTemplateProps, _logicalType: 'AWS::Pinpoint::SmsTemplate' }) as unknown as SmsTemplate }

export interface SmsTemplate extends KloudResource {
    templateName: Value<string>;
    body: Value<string>;
    templateDescription?: Value<string>;
    defaultSubstitutions?: Value<string>;
    tags?: Value<any>;
}