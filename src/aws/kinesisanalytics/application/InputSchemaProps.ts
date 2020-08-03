import { Value } from '../../../kloudformation/Value';
import { RecordColumnProps } from './RecordColumnProps';
import { RecordFormatProps } from './RecordFormatProps';

export interface InputSchemaProps {
  recordEncoding?: Value<string>
  recordColumns: RecordColumnProps[]
  recordFormat: RecordFormatProps
}