import { Value } from '../../../kloudformation/Value';

export interface CSVMappingParametersProps {
  recordRowDelimiter: Value<string>
  recordColumnDelimiter: Value<string>
}