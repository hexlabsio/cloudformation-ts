import { AccountTakeoverActionsTypeProps } from './AccountTakeoverActionsTypeProps';
import { NotifyConfigurationTypeProps } from './NotifyConfigurationTypeProps';

export function accountTakeoverRiskConfigurationTypeProps(accountTakeoverRiskConfigurationTypePropsProps: AccountTakeoverRiskConfigurationTypeProps): AccountTakeoverRiskConfigurationTypeProps { return (accountTakeoverRiskConfigurationTypePropsProps) as unknown as AccountTakeoverRiskConfigurationTypeProps }

export interface AccountTakeoverRiskConfigurationTypeProps {
    actions: AccountTakeoverActionsTypeProps;
    notifyConfiguration?: NotifyConfigurationTypeProps;
}