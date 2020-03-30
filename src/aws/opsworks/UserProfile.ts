import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userProfile(userProfileProps: UserProfile & { logicalName?: string }): UserProfile { return ({ ...userProfileProps, _logicalType: 'AWS::OpsWorks::UserProfile' }) as unknown as UserProfile }

export interface UserProfile extends KloudResource {
    iamUserArn: Value<string>;
    allowSelfManagement?: Value<boolean>;
    sshPublicKey?: Value<string>;
    sshUsername?: Value<string>;
}