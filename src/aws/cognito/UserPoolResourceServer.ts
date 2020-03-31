import { Value } from '../../kloudformation/Value';
import { ResourceServerScopeTypeProps } from './userpoolresourceserver/ResourceServerScopeTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolResourceServerAttributes = {  }
export function userPoolResourceServer(userPoolResourceServerProps: UserPoolResourceServer): UserPoolResourceServer & { attributes: UserPoolResourceServerAttributes } { return ({ ...userPoolResourceServerProps, _logicalType: 'AWS::Cognito::UserPoolResourceServer', attributes: {  } }) }

export interface UserPoolResourceServer extends KloudResource {
    userPoolId: Value<string>;
    identifier: Value<string>;
    name: Value<string>;
    scopes?: ResourceServerScopeTypeProps[];
}