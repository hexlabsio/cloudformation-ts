import { BackupPlanResourceTypeProps } from './backupplan/BackupPlanResourceTypeProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function backupPlan(backupPlanProps: BackupPlan & { logicalName?: string }): BackupPlan { return ({ ...backupPlanProps, _logicalType: 'AWS::Backup::BackupPlan' }) as unknown as BackupPlan }

export interface BackupPlan extends KloudResource {
    backupPlan: BackupPlanResourceTypeProps;
    backupPlanTags?: Value<any>;
}