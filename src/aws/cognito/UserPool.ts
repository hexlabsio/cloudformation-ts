import { Value } from '../../kloudformation/Value';
import { PoliciesProps } from './userPool/PoliciesProps';
import { VerificationMessageTemplateProps } from './userPool/VerificationMessageTemplateProps';
import { SchemaAttributeProps } from './userPool/SchemaAttributeProps';
import { AdminCreateUserConfigProps } from './userPool/AdminCreateUserConfigProps';
import { UsernameConfigurationProps } from './userPool/UsernameConfigurationProps';
import { UserPoolAddOnsProps } from './userPool/UserPoolAddOnsProps';
import { EmailConfigurationProps } from './userPool/EmailConfigurationProps';
import { SmsConfigurationProps } from './userPool/SmsConfigurationProps';
import { LambdaConfigProps } from './userPool/LambdaConfigProps';
import { DeviceConfigurationProps } from './userPool/DeviceConfigurationProps';
import { AccountRecoverySettingProps } from './userPool/AccountRecoverySettingProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type UserPoolAttributes = { ProviderName: Attribute<string>;ProviderURL: Attribute<string>;Arn: Attribute<string> }
export function userPool(userPoolProps: UserPool): UserPool & {attributes: UserPoolAttributes} { return ({ ...userPoolProps, _logicalType: 'AWS::Cognito::UserPool', attributes: { ProviderName: 'ProviderName',ProviderURL: 'ProviderURL',Arn: 'Arn' } }) }
   
export interface UserPool extends KloudResource {
  userPoolTags?: Value<any>
  policies?: PoliciesProps
  verificationMessageTemplate?: VerificationMessageTemplateProps
  mfaConfiguration?: Value<string>
  schema?: SchemaAttributeProps[]
  adminCreateUserConfig?: AdminCreateUserConfigProps
  smsAuthenticationMessage?: Value<string>
  usernameConfiguration?: UsernameConfigurationProps
  userPoolName?: Value<string>
  smsVerificationMessage?: Value<string>
  userPoolAddOns?: UserPoolAddOnsProps
  emailConfiguration?: EmailConfigurationProps
  smsConfiguration?: SmsConfigurationProps
  aliasAttributes?: Value<Value<string>[]>
  enabledMfas?: Value<Value<string>[]>
  emailVerificationSubject?: Value<string>
  lambdaConfig?: LambdaConfigProps
  usernameAttributes?: Value<Value<string>[]>
  autoVerifiedAttributes?: Value<Value<string>[]>
  deviceConfiguration?: DeviceConfigurationProps
  emailVerificationMessage?: Value<string>
  accountRecoverySetting?: AccountRecoverySettingProps
}