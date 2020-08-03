import { DatasetContentVersionValueProps } from './DatasetContentVersionValueProps';
import { Value } from '../../../kloudformation/Value';
import { OutputFileUriValueProps } from './OutputFileUriValueProps';

export interface VariableProps {
  datasetContentVersionValue?: DatasetContentVersionValueProps
  doubleValue?: Value<number>
  outputFileUriValue?: OutputFileUriValueProps
  variableName: Value<string>
  stringValue?: Value<string>
}