import { RecoveryOptionProps } from './RecoveryOptionProps';

export function accountRecoverySettingProps(accountRecoverySettingPropsProps: AccountRecoverySettingProps): AccountRecoverySettingProps { return (accountRecoverySettingPropsProps) as unknown as AccountRecoverySettingProps }

export interface AccountRecoverySettingProps {
    recoveryMechanisms?: RecoveryOptionProps[];
}