import { Value } from '../../../kloudformation/Value';

export function userProps(userPropsProps: UserProps): UserProps { return (userPropsProps) as unknown as UserProps }

export interface UserProps {
    username: Value<string>;
    password: Value<string>;
    groups?: Value<Value<string>[]>;
    consoleAccess?: Value<boolean>;
}