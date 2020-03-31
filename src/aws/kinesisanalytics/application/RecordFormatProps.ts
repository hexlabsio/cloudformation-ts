import { Value } from '../../../kloudformation/Value';
import { MappingParametersProps } from './MappingParametersProps';

export function recordFormatProps(recordFormatPropsProps: RecordFormatProps): RecordFormatProps { return (recordFormatPropsProps) }

export interface RecordFormatProps {
    recordFormatType: Value<string>;
    mappingParameters?: MappingParametersProps;
}