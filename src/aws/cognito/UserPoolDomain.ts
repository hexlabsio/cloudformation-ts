import { Value } from '../../kloudformation/Value';
import { CustomDomainConfigTypeProps } from './userPoolDomain/CustomDomainConfigTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolDomain(userPoolDomainProps: UserPoolDomain): UserPoolDomain { return ({ ...userPoolDomainProps, _logicalType: '' }) }
  
export interface UserPoolDomain extends KloudResource {
  userPoolId: Value<string>
  customDomainConfig?: CustomDomainConfigTypeProps
  domain: Value<string>
}