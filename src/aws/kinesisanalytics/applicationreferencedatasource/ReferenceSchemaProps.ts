import { Value } from '../../../kloudformation/Value';
import { RecordColumnProps } from './RecordColumnProps';
import { RecordFormatProps } from './RecordFormatProps';

export interface ReferenceSchemaProps {
  recordEncoding?: Value<string>
  recordColumns: RecordColumnProps[]
  recordFormat: RecordFormatProps
}