import { ConditionResourceTypeProps } from './ConditionResourceTypeProps';
import { Value } from '../../../kloudformation/Value';

export interface BackupSelectionResourceTypeProps {
  listOfTags?: ConditionResourceTypeProps[]
  selectionName: Value<string>
  iamRoleArn: Value<string>
  resources?: Value<Value<string>[]>
}