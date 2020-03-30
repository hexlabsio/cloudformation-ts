import { WebhookAuthConfigurationProps } from './webhook/WebhookAuthConfigurationProps';
import { WebhookFilterRuleProps } from './webhook/WebhookFilterRuleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function webhook(webhookProps: Webhook & { logicalName?: string }): Webhook { return ({ ...webhookProps, _logicalType: 'AWS::CodePipeline::Webhook' }) as unknown as Webhook }

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