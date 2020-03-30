import { RecordColumnProps } from './RecordColumnProps';
import { RecordFormatProps } from './RecordFormatProps';
import { Value } from '../../../kloudformation/Value';

export function referenceSchemaProps(referenceSchemaPropsProps: ReferenceSchemaProps): ReferenceSchemaProps { return (referenceSchemaPropsProps) as unknown as ReferenceSchemaProps }

export interface ReferenceSchemaProps {
    recordColumns: RecordColumnProps[];
    recordFormat: RecordFormatProps;
    recordEncoding?: Value<string>;
}