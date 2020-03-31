import { Value } from '../../../kloudformation/Value';
import { CopyActionResourceTypeProps } from './CopyActionResourceTypeProps';
import { LifecycleResourceTypeProps } from './LifecycleResourceTypeProps';

export function backupRuleResourceTypeProps(backupRuleResourceTypePropsProps: BackupRuleResourceTypeProps): BackupRuleResourceTypeProps { return (backupRuleResourceTypePropsProps) }

export interface BackupRuleResourceTypeProps {
    targetBackupVault: Value<string>;
    ruleName: Value<string>;
    completionWindowMinutes?: Value<number>;
    scheduleExpression?: Value<string>;
    recoveryPointTags?: Value<any>;
    copyActions?: CopyActionResourceTypeProps[];
    lifecycle?: LifecycleResourceTypeProps;
    startWindowMinutes?: Value<number>;
}