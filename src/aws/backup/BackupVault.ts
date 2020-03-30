import { Value } from '../../kloudformation/Value';
import { NotificationObjectTypeProps } from './backupvault/NotificationObjectTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function backupVault(backupVaultProps: BackupVault & { logicalName?: string }): BackupVault { return ({ ...backupVaultProps, _logicalType: 'AWS::Backup::BackupVault' }) as unknown as BackupVault }

export interface BackupVault extends KloudResource {
    backupVaultName: Value<string>;
    backupVaultTags?: Value<any>;
    encryptionKeyArn?: Value<string>;
    notifications?: NotificationObjectTypeProps;
    accessPolicy?: Value<any>;
}