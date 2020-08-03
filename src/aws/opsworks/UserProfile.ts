import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type UserProfileAttributes = { SshUsername: Attribute<string> }
export function userProfile(userProfileProps: UserProfile): UserProfile & {attributes: UserProfileAttributes} { return ({ ...userProfileProps, _logicalType: 'AWS::OpsWorks::UserProfile', attributes: { SshUsername: 'SshUsername' } }) }
   
export interface UserProfile extends KloudResource {
  allowSelfManagement?: Value<boolean>
  iamUserArn: Value<string>
  sshPublicKey?: Value<string>
  sshUsername?: Value<string>
}