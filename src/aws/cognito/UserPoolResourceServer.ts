import { Value } from '../../kloudformation/Value';
import { ResourceServerScopeTypeProps } from './userPoolResourceServer/ResourceServerScopeTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolResourceServer(userPoolResourceServerProps: UserPoolResourceServer): UserPoolResourceServer { return ({ ...userPoolResourceServerProps, _logicalType: '' }) }
  
export interface UserPoolResourceServer extends KloudResource {
  userPoolId: Value<string>
  identifier: Value<string>
  scopes?: ResourceServerScopeTypeProps[]
  name: Value<string>
}