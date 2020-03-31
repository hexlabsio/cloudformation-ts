import { Value } from '../../kloudformation/Value';
import { NotificationObjectTypeProps } from './backupvault/NotificationObjectTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type BackupVaultAttributes = { BackupVaultName: Attribute<string>; BackupVaultArn: Attribute<string> }
export function backupVault(backupVaultProps: BackupVault): BackupVault & { attributes: BackupVaultAttributes } { return ({ ...backupVaultProps, _logicalType: 'AWS::Backup::BackupVault', attributes: { BackupVaultName: 'BackupVaultName', BackupVaultArn: 'BackupVaultArn' } }) }

export interface BackupVault extends KloudResource {
    backupVaultName: Value<string>;
    backupVaultTags?: Value<any>;
    encryptionKeyArn?: Value<string>;
    notifications?: NotificationObjectTypeProps;
    accessPolicy?: Value<any>;
}