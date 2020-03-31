import { Value } from '../../../kloudformation/Value';

export function userSettingProps(userSettingPropsProps: UserSettingProps): UserSettingProps { return (userSettingPropsProps) }

export interface UserSettingProps {
    action: Value<string>;
    permission: Value<string>;
}