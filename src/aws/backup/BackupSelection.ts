import { BackupSelectionResourceTypeProps } from './backupselection/BackupSelectionResourceTypeProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type BackupSelectionAttributes = { BackupPlanId: Attribute<string>; SelectionId: Attribute<string> }
export function backupSelection(backupSelectionProps: BackupSelection): BackupSelection & { attributes: BackupSelectionAttributes } { return ({ ...backupSelectionProps, _logicalType: 'AWS::Backup::BackupSelection', attributes: { BackupPlanId: 'BackupPlanId', SelectionId: 'SelectionId' } }) }

export interface BackupSelection extends KloudResource {
    backupSelection: BackupSelectionResourceTypeProps;
    backupPlanId: Value<string>;
}