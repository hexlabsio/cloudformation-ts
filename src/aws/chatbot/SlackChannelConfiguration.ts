import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SlackChannelConfigurationAttributes = {  }
export function slackChannelConfiguration(slackChannelConfigurationProps: SlackChannelConfiguration): SlackChannelConfiguration & { attributes: SlackChannelConfigurationAttributes } { return ({ ...slackChannelConfigurationProps, _logicalType: 'AWS::Chatbot::SlackChannelConfiguration', attributes: {  } }) }

export interface SlackChannelConfiguration extends KloudResource {
    slackWorkspaceId: Value<string>;
    slackChannelId: Value<string>;
    configurationName: Value<string>;
    iamRoleArn: Value<string>;
    snsTopicArns?: Value<Value<string>[]>;
    loggingLevel?: Value<string>;
    arn?: Value<string>;
}