import { BackupPlanResourceTypeProps } from './backupPlan/BackupPlanResourceTypeProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type BackupPlanAttributes = { VersionId: Attribute<string>;BackupPlanId: Attribute<string>;BackupPlanArn: Attribute<string> }
export function backupPlan(backupPlanProps: BackupPlan): BackupPlan & {attributes: BackupPlanAttributes} { return ({ ...backupPlanProps, _logicalType: 'AWS::Backup::BackupPlan', attributes: { VersionId: 'VersionId',BackupPlanId: 'BackupPlanId',BackupPlanArn: 'BackupPlanArn' } }) }
   
export interface BackupPlan extends KloudResource {
  backupPlan: BackupPlanResourceTypeProps
  backupPlanTags?: Value<any>
}