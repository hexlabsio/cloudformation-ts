import { Value } from '../../kloudformation/Value';
import { NotificationObjectTypeProps } from './backupVault/NotificationObjectTypeProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type BackupVaultAttributes = { BackupVaultName: Attribute<string>;BackupVaultArn: Attribute<string> }
export function backupVault(backupVaultProps: BackupVault): BackupVault & {attributes: BackupVaultAttributes} { return ({ ...backupVaultProps, _logicalType: 'AWS::Backup::BackupVault', attributes: { BackupVaultName: 'BackupVaultName',BackupVaultArn: 'BackupVaultArn' } }) }
   
export interface BackupVault extends KloudResource {
  backupVaultTags?: Value<any>
  backupVaultName: Value<string>
  encryptionKeyArn?: Value<string>
  notifications?: NotificationObjectTypeProps
  accessPolicy?: Value<any>
}