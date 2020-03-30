import { AccountTakeoverActionTypeProps } from './AccountTakeoverActionTypeProps';

export function accountTakeoverActionsTypeProps(accountTakeoverActionsTypePropsProps: AccountTakeoverActionsTypeProps): AccountTakeoverActionsTypeProps { return (accountTakeoverActionsTypePropsProps) as unknown as AccountTakeoverActionsTypeProps }

export interface AccountTakeoverActionsTypeProps {
    highAction?: AccountTakeoverActionTypeProps;
    lowAction?: AccountTakeoverActionTypeProps;
    mediumAction?: AccountTakeoverActionTypeProps;
}