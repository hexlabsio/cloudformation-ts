import { WebhookAuthConfigurationProps } from './webhook/WebhookAuthConfigurationProps';
import { WebhookFilterRuleProps } from './webhook/WebhookFilterRuleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type WebhookAttributes = { Url: Attribute<string> }
export function webhook(webhookProps: Webhook): Webhook & { attributes: WebhookAttributes } { return ({ ...webhookProps, _logicalType: 'AWS::CodePipeline::Webhook', attributes: { Url: 'Url' } }) }

export interface Webhook extends KloudResource {
    authenticationConfiguration: WebhookAuthConfigurationProps;
    filters: WebhookFilterRuleProps[];
    authentication: Value<string>;
    targetPipeline: Value<string>;
    targetAction: Value<string>;
    targetPipelineVersion: Value<number>;
    name?: Value<string>;
    registerWithThirdParty?: Value<boolean>;
}