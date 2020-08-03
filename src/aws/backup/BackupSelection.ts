import { BackupSelectionResourceTypeProps } from './backupSelection/BackupSelectionResourceTypeProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type BackupSelectionAttributes = { BackupPlanId: Attribute<string>;SelectionId: Attribute<string> }
export function backupSelection(backupSelectionProps: BackupSelection): BackupSelection & {attributes: BackupSelectionAttributes} { return ({ ...backupSelectionProps, _logicalType: 'AWS::Backup::BackupSelection', attributes: { BackupPlanId: 'BackupPlanId',SelectionId: 'SelectionId' } }) }
   
export interface BackupSelection extends KloudResource {
  backupSelection: BackupSelectionResourceTypeProps
  backupPlanId: Value<string>
}