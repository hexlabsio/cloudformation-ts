import { Value } from '../../kloudformation/Value';
import { CustomDomainConfigTypeProps } from './userpooldomain/CustomDomainConfigTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolDomain(userPoolDomainProps: UserPoolDomain & { logicalName?: string }): UserPoolDomain { return ({ ...userPoolDomainProps, _logicalType: 'AWS::Cognito::UserPoolDomain' }) as unknown as UserPoolDomain }

export interface UserPoolDomain extends KloudResource {
    userPoolId: Value<string>;
    domain: Value<string>;
    customDomainConfig?: CustomDomainConfigTypeProps;
}