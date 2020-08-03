import { CompromisedCredentialsRiskConfigurationTypeProps } from './userPoolRiskConfigurationAttachment/CompromisedCredentialsRiskConfigurationTypeProps';
import { Value } from '../../kloudformation/Value';
import { AccountTakeoverRiskConfigurationTypeProps } from './userPoolRiskConfigurationAttachment/AccountTakeoverRiskConfigurationTypeProps';
import { RiskExceptionConfigurationTypeProps } from './userPoolRiskConfigurationAttachment/RiskExceptionConfigurationTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolRiskConfigurationAttachment(userPoolRiskConfigurationAttachmentProps: UserPoolRiskConfigurationAttachment): UserPoolRiskConfigurationAttachment { return ({ ...userPoolRiskConfigurationAttachmentProps, _logicalType: '' }) }
  
export interface UserPoolRiskConfigurationAttachment extends KloudResource {
  compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationTypeProps
  userPoolId: Value<string>
  clientId: Value<string>
  accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationTypeProps
  riskExceptionConfiguration?: RiskExceptionConfigurationTypeProps
}