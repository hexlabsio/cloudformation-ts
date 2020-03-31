import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolGroupAttributes = {  }
export function userPoolGroup(userPoolGroupProps: UserPoolGroup): UserPoolGroup & { attributes: UserPoolGroupAttributes } { return ({ ...userPoolGroupProps, _logicalType: 'AWS::Cognito::UserPoolGroup', attributes: {  } }) }

export interface UserPoolGroup extends KloudResource {
    userPoolId: Value<string>;
    groupName?: Value<string>;
    description?: Value<string>;
    precedence?: Value<number>;
    roleArn?: Value<string>;
}