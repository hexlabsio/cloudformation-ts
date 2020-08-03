import { Value } from '../../../kloudformation/Value';
import { BackupRuleResourceTypeProps } from './BackupRuleResourceTypeProps';

export interface BackupPlanResourceTypeProps {
  backupPlanName: Value<string>
  backupPlanRule: BackupRuleResourceTypeProps[]
}