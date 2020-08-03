import { LifecycleResourceTypeProps } from './LifecycleResourceTypeProps';
import { Value } from '../../../kloudformation/Value';

export interface CopyActionResourceTypeProps {
  lifecycle?: LifecycleResourceTypeProps
  destinationBackupVaultArn: Value<string>
}