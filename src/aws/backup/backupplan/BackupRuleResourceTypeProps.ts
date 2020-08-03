import { Value } from '../../../kloudformation/Value';
import { CopyActionResourceTypeProps } from './CopyActionResourceTypeProps';
import { LifecycleResourceTypeProps } from './LifecycleResourceTypeProps';

export interface BackupRuleResourceTypeProps {
  completionWindowMinutes?: Value<number>
  scheduleExpression?: Value<string>
  recoveryPointTags?: Value<any>
  copyActions?: CopyActionResourceTypeProps[]
  lifecycle?: LifecycleResourceTypeProps
  targetBackupVault: Value<string>
  startWindowMinutes?: Value<number>
  ruleName: Value<string>
}