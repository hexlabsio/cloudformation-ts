import { AccountTakeoverActionTypeProps } from './AccountTakeoverActionTypeProps';

export function accountTakeoverActionsTypeProps(accountTakeoverActionsTypePropsProps: AccountTakeoverActionsTypeProps): AccountTakeoverActionsTypeProps { return (accountTakeoverActionsTypePropsProps) }

export interface AccountTakeoverActionsTypeProps {
    highAction?: AccountTakeoverActionTypeProps;
    lowAction?: AccountTakeoverActionTypeProps;
    mediumAction?: AccountTakeoverActionTypeProps;
}