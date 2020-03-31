import { Value } from '../../../kloudformation/Value';

export function accountTakeoverActionTypeProps(accountTakeoverActionTypePropsProps: AccountTakeoverActionTypeProps): AccountTakeoverActionTypeProps { return (accountTakeoverActionTypePropsProps) }

export interface AccountTakeoverActionTypeProps {
    notify: Value<boolean>;
    eventAction: Value<string>;
}