import { JSONMappingParametersProps } from './JSONMappingParametersProps';
import { CSVMappingParametersProps } from './CSVMappingParametersProps';

export interface MappingParametersProps {
  jSONMappingParameters?: JSONMappingParametersProps
  cSVMappingParameters?: CSVMappingParametersProps
}