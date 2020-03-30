import { Value } from '../../../kloudformation/Value';
import { ConditionResourceTypeProps } from './ConditionResourceTypeProps';

export function backupSelectionResourceTypeProps(backupSelectionResourceTypePropsProps: BackupSelectionResourceTypeProps): BackupSelectionResourceTypeProps { return (backupSelectionResourceTypePropsProps) as unknown as BackupSelectionResourceTypeProps }

export interface BackupSelectionResourceTypeProps {
    selectionName: Value<string>;
    iamRoleArn: Value<string>;
    listOfTags?: ConditionResourceTypeProps[];
    resources?: Value<Value<string>[]>;
}