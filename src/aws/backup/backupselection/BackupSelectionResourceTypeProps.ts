import { Value } from '../../../kloudformation/Value';
import { ConditionResourceTypeProps } from './ConditionResourceTypeProps';

export function backupSelectionResourceTypeProps(backupSelectionResourceTypePropsProps: BackupSelectionResourceTypeProps): BackupSelectionResourceTypeProps { return (backupSelectionResourceTypePropsProps) }

export interface BackupSelectionResourceTypeProps {
    selectionName: Value<string>;
    iamRoleArn: Value<string>;
    listOfTags?: ConditionResourceTypeProps[];
    resources?: Value<Value<string>[]>;
}