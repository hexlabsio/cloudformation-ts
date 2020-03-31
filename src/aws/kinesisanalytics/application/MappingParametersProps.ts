import { JSONMappingParametersProps } from './JSONMappingParametersProps';
import { CSVMappingParametersProps } from './CSVMappingParametersProps';

export function mappingParametersProps(mappingParametersPropsProps: MappingParametersProps): MappingParametersProps { return (mappingParametersPropsProps) }

export interface MappingParametersProps {
    jSONMappingParameters?: JSONMappingParametersProps;
    cSVMappingParameters?: CSVMappingParametersProps;
}