import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function user(userProps: User & { logicalName?: string }): User { return ({ ...userProps, _logicalType: 'AWS::AppStream::User' }) as unknown as User }

export interface User extends KloudResource {
    userName: Value<string>;
    authenticationType: Value<string>;
    firstName?: Value<string>;
    messageAction?: Value<string>;
    lastName?: Value<string>;
}