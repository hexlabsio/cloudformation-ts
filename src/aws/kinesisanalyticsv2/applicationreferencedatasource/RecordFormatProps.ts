import { Value } from '../../../kloudformation/Value';
import { MappingParametersProps } from '../../kinesisanalytics/applicationreferencedatasource/MappingParametersProps';

export function recordFormatProps(recordFormatPropsProps: RecordFormatProps): RecordFormatProps { return (recordFormatPropsProps) }

export interface RecordFormatProps {
    recordFormatType: Value<string>;
    mappingParameters?: MappingParametersProps;
}