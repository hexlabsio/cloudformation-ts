import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserAttributes = {  }
export function user(userProps: User): User & { attributes: UserAttributes } { return ({ ...userProps, _logicalType: 'AWS::AppStream::User', attributes: {  } }) }

export interface User extends KloudResource {
    userName: Value<string>;
    authenticationType: Value<string>;
    firstName?: Value<string>;
    messageAction?: Value<string>;
    lastName?: Value<string>;
}