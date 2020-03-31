import { Value } from '../../kloudformation/Value';
import { PoliciesProps } from './userpool/PoliciesProps';
import { VerificationMessageTemplateProps } from './userpool/VerificationMessageTemplateProps';
import { SchemaAttributeProps } from './userpool/SchemaAttributeProps';
import { AdminCreateUserConfigProps } from './userpool/AdminCreateUserConfigProps';
import { UsernameConfigurationProps } from './userpool/UsernameConfigurationProps';
import { UserPoolAddOnsProps } from './userpool/UserPoolAddOnsProps';
import { EmailConfigurationProps } from './userpool/EmailConfigurationProps';
import { SmsConfigurationProps } from './userpool/SmsConfigurationProps';
import { LambdaConfigProps } from './userpool/LambdaConfigProps';
import { DeviceConfigurationProps } from './userpool/DeviceConfigurationProps';
import { AccountRecoverySettingProps } from './userpool/AccountRecoverySettingProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type UserPoolAttributes = { ProviderName: Attribute<string>; ProviderURL: Attribute<string>; Arn: Attribute<string> }
export function userPool(userPoolProps: UserPool): UserPool & { attributes: UserPoolAttributes } { return ({ ...userPoolProps, _logicalType: 'AWS::Cognito::UserPool', attributes: { ProviderName: 'ProviderName', ProviderURL: 'ProviderURL', Arn: 'Arn' } }) }

export interface UserPool extends KloudResource {
    userPoolTags?: Value<any>;
    policies?: PoliciesProps;
    verificationMessageTemplate?: VerificationMessageTemplateProps;
    mfaConfiguration?: Value<string>;
    schema?: SchemaAttributeProps[];
    adminCreateUserConfig?: AdminCreateUserConfigProps;
    smsAuthenticationMessage?: Value<string>;
    usernameConfiguration?: UsernameConfigurationProps;
    userPoolName?: Value<string>;
    smsVerificationMessage?: Value<string>;
    userPoolAddOns?: UserPoolAddOnsProps;
    emailConfiguration?: EmailConfigurationProps;
    smsConfiguration?: SmsConfigurationProps;
    aliasAttributes?: Value<Value<string>[]>;
    enabledMfas?: Value<Value<string>[]>;
    emailVerificationSubject?: Value<string>;
    lambdaConfig?: LambdaConfigProps;
    usernameAttributes?: Value<Value<string>[]>;
    autoVerifiedAttributes?: Value<Value<string>[]>;
    deviceConfiguration?: DeviceConfigurationProps;
    emailVerificationMessage?: Value<string>;
    accountRecoverySetting?: AccountRecoverySettingProps;
}