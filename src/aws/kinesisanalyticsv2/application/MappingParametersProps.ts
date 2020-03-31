import { JSONMappingParametersProps } from '../../kinesisanalytics/application/JSONMappingParametersProps';
import { CSVMappingParametersProps } from '../../kinesisanalytics/application/CSVMappingParametersProps';

export function mappingParametersProps(mappingParametersPropsProps: MappingParametersProps): MappingParametersProps { return (mappingParametersPropsProps) }

export interface MappingParametersProps {
    jSONMappingParameters?: JSONMappingParametersProps;
    cSVMappingParameters?: CSVMappingParametersProps;
}