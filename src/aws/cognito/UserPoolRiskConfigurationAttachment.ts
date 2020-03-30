import { Value } from '../../kloudformation/Value';
import { CompromisedCredentialsRiskConfigurationTypeProps } from './userpoolriskconfigurationattachment/CompromisedCredentialsRiskConfigurationTypeProps';
import { AccountTakeoverRiskConfigurationTypeProps } from './userpoolriskconfigurationattachment/AccountTakeoverRiskConfigurationTypeProps';
import { RiskExceptionConfigurationTypeProps } from './userpoolriskconfigurationattachment/RiskExceptionConfigurationTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolRiskConfigurationAttachment(userPoolRiskConfigurationAttachmentProps: UserPoolRiskConfigurationAttachment & { logicalName?: string }): UserPoolRiskConfigurationAttachment { return ({ ...userPoolRiskConfigurationAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolRiskConfigurationAttachment' }) as unknown as UserPoolRiskConfigurationAttachment }

export interface UserPoolRiskConfigurationAttachment extends KloudResource {
    userPoolId: Value<string>;
    clientId: Value<string>;
    compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationTypeProps;
    accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationTypeProps;
    riskExceptionConfiguration?: RiskExceptionConfigurationTypeProps;
}