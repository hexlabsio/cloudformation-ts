import { Value } from '../../../kloudformation/Value';

export function accountTakeoverActionTypeProps(accountTakeoverActionTypePropsProps: AccountTakeoverActionTypeProps): AccountTakeoverActionTypeProps { return (accountTakeoverActionTypePropsProps) as unknown as AccountTakeoverActionTypeProps }

export interface AccountTakeoverActionTypeProps {
    notify: Value<boolean>;
    eventAction: Value<string>;
}