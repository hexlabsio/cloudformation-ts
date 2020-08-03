import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SlackChannelConfigurationAttributes = { Arn: Attribute<string> }
export function slackChannelConfiguration(slackChannelConfigurationProps: SlackChannelConfiguration): SlackChannelConfiguration & {attributes: SlackChannelConfigurationAttributes} { return ({ ...slackChannelConfigurationProps, _logicalType: 'AWS::Chatbot::SlackChannelConfiguration', attributes: { Arn: 'Arn' } }) }
   
export interface SlackChannelConfiguration extends KloudResource {
  slackWorkspaceId: Value<string>
  slackChannelId: Value<string>
  configurationName: Value<string>
  iamRoleArn: Value<string>
  snsTopicArns?: Value<Value<string>[]>
  loggingLevel?: Value<string>
}