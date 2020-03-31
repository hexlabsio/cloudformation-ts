import { SelfManagedActiveDirectoryConfigurationProps } from './SelfManagedActiveDirectoryConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export function windowsConfigurationProps(windowsConfigurationPropsProps: WindowsConfigurationProps): WindowsConfigurationProps { return (windowsConfigurationPropsProps) }

export interface WindowsConfigurationProps {
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationProps;
    weeklyMaintenanceStartTime?: Value<string>;
    activeDirectoryId?: Value<string>;
    deploymentType?: Value<string>;
    throughputCapacity?: Value<number>;
    copyTagsToBackups?: Value<boolean>;
    dailyAutomaticBackupStartTime?: Value<string>;
    automaticBackupRetentionDays?: Value<number>;
    preferredSubnetId?: Value<string>;
}