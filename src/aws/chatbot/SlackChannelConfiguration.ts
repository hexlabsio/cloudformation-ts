import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function slackChannelConfiguration(slackChannelConfigurationProps: SlackChannelConfiguration & { logicalName?: string }): SlackChannelConfiguration { return ({ ...slackChannelConfigurationProps, _logicalType: 'AWS::Chatbot::SlackChannelConfiguration' }) as unknown as SlackChannelConfiguration }

export interface SlackChannelConfiguration extends KloudResource {
    slackWorkspaceId: Value<string>;
    slackChannelId: Value<string>;
    configurationName: Value<string>;
    iamRoleArn: Value<string>;
    snsTopicArns?: Value<Value<string>[]>;
    loggingLevel?: Value<string>;
    arn?: Value<string>;
}