import { AccountTakeoverActionsTypeProps } from './AccountTakeoverActionsTypeProps';
import { NotifyConfigurationTypeProps } from './NotifyConfigurationTypeProps';

export function accountTakeoverRiskConfigurationTypeProps(accountTakeoverRiskConfigurationTypePropsProps: AccountTakeoverRiskConfigurationTypeProps): AccountTakeoverRiskConfigurationTypeProps { return (accountTakeoverRiskConfigurationTypePropsProps) }

export interface AccountTakeoverRiskConfigurationTypeProps {
    actions: AccountTakeoverActionsTypeProps;
    notifyConfiguration?: NotifyConfigurationTypeProps;
}