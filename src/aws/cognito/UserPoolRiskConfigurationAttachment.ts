import { Value } from '../../kloudformation/Value';
import { CompromisedCredentialsRiskConfigurationTypeProps } from './userpoolriskconfigurationattachment/CompromisedCredentialsRiskConfigurationTypeProps';
import { AccountTakeoverRiskConfigurationTypeProps } from './userpoolriskconfigurationattachment/AccountTakeoverRiskConfigurationTypeProps';
import { RiskExceptionConfigurationTypeProps } from './userpoolriskconfigurationattachment/RiskExceptionConfigurationTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolRiskConfigurationAttachmentAttributes = {  }
export function userPoolRiskConfigurationAttachment(userPoolRiskConfigurationAttachmentProps: UserPoolRiskConfigurationAttachment): UserPoolRiskConfigurationAttachment & { attributes: UserPoolRiskConfigurationAttachmentAttributes } { return ({ ...userPoolRiskConfigurationAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolRiskConfigurationAttachment', attributes: {  } }) }

export interface UserPoolRiskConfigurationAttachment extends KloudResource {
    userPoolId: Value<string>;
    clientId: Value<string>;
    compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationTypeProps;
    accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationTypeProps;
    riskExceptionConfiguration?: RiskExceptionConfigurationTypeProps;
}