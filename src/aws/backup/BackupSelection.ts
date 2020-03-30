import { BackupSelectionResourceTypeProps } from './backupselection/BackupSelectionResourceTypeProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function backupSelection(backupSelectionProps: BackupSelection & { logicalName?: string }): BackupSelection { return ({ ...backupSelectionProps, _logicalType: 'AWS::Backup::BackupSelection' }) as unknown as BackupSelection }

export interface BackupSelection extends KloudResource {
    backupSelection: BackupSelectionResourceTypeProps;
    backupPlanId: Value<string>;
}