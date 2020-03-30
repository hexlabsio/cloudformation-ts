import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolGroup(userPoolGroupProps: UserPoolGroup & { logicalName?: string }): UserPoolGroup { return ({ ...userPoolGroupProps, _logicalType: 'AWS::Cognito::UserPoolGroup' }) as unknown as UserPoolGroup }

export interface UserPoolGroup extends KloudResource {
    userPoolId: Value<string>;
    groupName?: Value<string>;
    description?: Value<string>;
    precedence?: Value<number>;
    roleArn?: Value<string>;
}