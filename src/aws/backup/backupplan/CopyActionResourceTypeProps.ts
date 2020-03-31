import { Value } from '../../../kloudformation/Value';
import { LifecycleResourceTypeProps } from './LifecycleResourceTypeProps';

export function copyActionResourceTypeProps(copyActionResourceTypePropsProps: CopyActionResourceTypeProps): CopyActionResourceTypeProps { return (copyActionResourceTypePropsProps) }

export interface CopyActionResourceTypeProps {
    destinationBackupVaultArn: Value<string>;
    lifecycle?: LifecycleResourceTypeProps;
}