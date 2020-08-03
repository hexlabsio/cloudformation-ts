import { Value } from '../../../kloudformation/Value';

export interface LdapServerMetadataProps {
  hosts: Value<Value<string>[]>
  userRoleName?: Value<string>
  userSearchMatching: Value<string>
  roleName?: Value<string>
  userBase: Value<string>
  userSearchSubtree?: Value<boolean>
  roleSearchMatching: Value<string>
  serviceAccountUsername: Value<string>
  roleBase: Value<string>
  serviceAccountPassword: Value<string>
  roleSearchSubtree?: Value<boolean>
}