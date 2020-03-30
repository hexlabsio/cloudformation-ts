import { Value } from '../../../kloudformation/Value';
import { MappingParametersProps } from '../../kinesisanalytics/applicationreferencedatasource/MappingParametersProps';

export function recordFormatProps(recordFormatPropsProps: RecordFormatProps): RecordFormatProps { return (recordFormatPropsProps) as unknown as RecordFormatProps }

export interface RecordFormatProps {
    recordFormatType: Value<string>;
    mappingParameters?: MappingParametersProps;
}