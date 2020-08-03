import { WebhookAuthConfigurationProps } from './webhook/WebhookAuthConfigurationProps';
import { WebhookFilterRuleProps } from './webhook/WebhookFilterRuleProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type WebhookAttributes = { Url: Attribute<string> }
export function webhook(webhookProps: Webhook): Webhook & {attributes: WebhookAttributes} { return ({ ...webhookProps, _logicalType: 'AWS::CodePipeline::Webhook', attributes: { Url: 'Url' } }) }
   
export interface Webhook extends KloudResource {
  authenticationConfiguration: WebhookAuthConfigurationProps
  filters: WebhookFilterRuleProps[]
  authentication: Value<string>
  targetPipeline: Value<string>
  targetAction: Value<string>
  name?: Value<string>
  targetPipelineVersion: Value<number>
  registerWithThirdParty?: Value<boolean>
}