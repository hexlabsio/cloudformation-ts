import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type UserProfileAttributes = { SshUsername: Attribute<string> }
export function userProfile(userProfileProps: UserProfile): UserProfile & { attributes: UserProfileAttributes } { return ({ ...userProfileProps, _logicalType: 'AWS::OpsWorks::UserProfile', attributes: { SshUsername: 'SshUsername' } }) }

export interface UserProfile extends KloudResource {
    iamUserArn: Value<string>;
    allowSelfManagement?: Value<boolean>;
    sshPublicKey?: Value<string>;
    sshUsername?: Value<string>;
}