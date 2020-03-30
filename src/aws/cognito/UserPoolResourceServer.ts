import { Value } from '../../kloudformation/Value';
import { ResourceServerScopeTypeProps } from './userpoolresourceserver/ResourceServerScopeTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolResourceServer(userPoolResourceServerProps: UserPoolResourceServer & { logicalName?: string }): UserPoolResourceServer { return ({ ...userPoolResourceServerProps, _logicalType: 'AWS::Cognito::UserPoolResourceServer' }) as unknown as UserPoolResourceServer }

export interface UserPoolResourceServer extends KloudResource {
    userPoolId: Value<string>;
    identifier: Value<string>;
    name: Value<string>;
    scopes?: ResourceServerScopeTypeProps[];
}