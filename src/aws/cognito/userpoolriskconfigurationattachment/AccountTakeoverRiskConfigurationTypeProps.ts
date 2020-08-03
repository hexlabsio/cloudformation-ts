import { AccountTakeoverActionsTypeProps } from './AccountTakeoverActionsTypeProps';
import { NotifyConfigurationTypeProps } from './NotifyConfigurationTypeProps';

export interface AccountTakeoverRiskConfigurationTypeProps {
  actions: AccountTakeoverActionsTypeProps
  notifyConfiguration?: NotifyConfigurationTypeProps
}