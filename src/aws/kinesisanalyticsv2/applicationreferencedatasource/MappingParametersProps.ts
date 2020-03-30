import { JSONMappingParametersProps } from '../../kinesisanalytics/applicationreferencedatasource/JSONMappingParametersProps';
import { CSVMappingParametersProps } from '../../kinesisanalytics/applicationreferencedatasource/CSVMappingParametersProps';

export function mappingParametersProps(mappingParametersPropsProps: MappingParametersProps): MappingParametersProps { return (mappingParametersPropsProps) as unknown as MappingParametersProps }

export interface MappingParametersProps {
    jSONMappingParameters?: JSONMappingParametersProps;
    cSVMappingParameters?: CSVMappingParametersProps;
}