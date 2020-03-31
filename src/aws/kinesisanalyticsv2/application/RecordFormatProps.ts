import { Value } from '../../../kloudformation/Value';
import { MappingParametersProps } from '../../kinesisanalytics/application/MappingParametersProps';

export function recordFormatProps(recordFormatPropsProps: RecordFormatProps): RecordFormatProps { return (recordFormatPropsProps) }

export interface RecordFormatProps {
    recordFormatType: Value<string>;
    mappingParameters?: MappingParametersProps;
}