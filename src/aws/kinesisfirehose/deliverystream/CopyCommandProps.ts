import { Value } from '../../../kloudformation/Value';

export interface CopyCommandProps {
  copyOptions?: Value<string>
  dataTableColumns?: Value<string>
  dataTableName: Value<string>
}