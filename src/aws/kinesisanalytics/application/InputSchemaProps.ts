import { RecordColumnProps } from './RecordColumnProps';
import { RecordFormatProps } from '../applicationreferencedatasource/RecordFormatProps';
import { Value } from '../../../kloudformation/Value';

export function inputSchemaProps(inputSchemaPropsProps: InputSchemaProps): InputSchemaProps { return (inputSchemaPropsProps) }

export interface InputSchemaProps {
    recordColumns: RecordColumnProps[];
    recordFormat: RecordFormatProps;
    recordEncoding?: Value<string>;
}