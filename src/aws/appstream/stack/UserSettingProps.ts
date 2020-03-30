import { Value } from '../../../kloudformation/Value';

export function userSettingProps(userSettingPropsProps: UserSettingProps): UserSettingProps { return (userSettingPropsProps) as unknown as UserSettingProps }

export interface UserSettingProps {
    action: Value<string>;
    permission: Value<string>;
}