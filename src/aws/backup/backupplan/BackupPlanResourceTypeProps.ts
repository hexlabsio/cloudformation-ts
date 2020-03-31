import { Value } from '../../../kloudformation/Value';
import { BackupRuleResourceTypeProps } from './BackupRuleResourceTypeProps';

export function backupPlanResourceTypeProps(backupPlanResourceTypePropsProps: BackupPlanResourceTypeProps): BackupPlanResourceTypeProps { return (backupPlanResourceTypePropsProps) }

export interface BackupPlanResourceTypeProps {
    backupPlanName: Value<string>;
    backupPlanRule: BackupRuleResourceTypeProps[];
}