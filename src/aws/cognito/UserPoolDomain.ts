import { Value } from '../../kloudformation/Value';
import { CustomDomainConfigTypeProps } from './userpooldomain/CustomDomainConfigTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolDomainAttributes = {  }
export function userPoolDomain(userPoolDomainProps: UserPoolDomain): UserPoolDomain & { attributes: UserPoolDomainAttributes } { return ({ ...userPoolDomainProps, _logicalType: 'AWS::Cognito::UserPoolDomain', attributes: {  } }) }

export interface UserPoolDomain extends KloudResource {
    userPoolId: Value<string>;
    domain: Value<string>;
    customDomainConfig?: CustomDomainConfigTypeProps;
}