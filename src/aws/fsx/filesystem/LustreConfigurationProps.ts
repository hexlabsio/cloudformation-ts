import { Value } from '../../../kloudformation/Value';

export interface LustreConfigurationProps {
  importPath?: Value<string>
  weeklyMaintenanceStartTime?: Value<string>
  autoImportPolicy?: Value<string>
  importedFileChunkSize?: Value<number>
  deploymentType?: Value<string>
  dailyAutomaticBackupStartTime?: Value<string>
  copyTagsToBackups?: Value<boolean>
  exportPath?: Value<string>
  perUnitStorageThroughput?: Value<number>
  automaticBackupRetentionDays?: Value<number>
}