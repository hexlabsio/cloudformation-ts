import { RecoveryOptionProps } from './RecoveryOptionProps';

export function accountRecoverySettingProps(accountRecoverySettingPropsProps: AccountRecoverySettingProps): AccountRecoverySettingProps { return (accountRecoverySettingPropsProps) }

export interface AccountRecoverySettingProps {
    recoveryMechanisms?: RecoveryOptionProps[];
}