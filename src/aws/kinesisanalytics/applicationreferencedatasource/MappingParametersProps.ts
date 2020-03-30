import { JSONMappingParametersProps } from './JSONMappingParametersProps';
import { CSVMappingParametersProps } from './CSVMappingParametersProps';

export function mappingParametersProps(mappingParametersPropsProps: MappingParametersProps): MappingParametersProps { return (mappingParametersPropsProps) as unknown as MappingParametersProps }

export interface MappingParametersProps {
    jSONMappingParameters?: JSONMappingParametersProps;
    cSVMappingParameters?: CSVMappingParametersProps;
}