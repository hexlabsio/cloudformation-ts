import { MappingParametersProps } from './MappingParametersProps';
import { Value } from '../../../kloudformation/Value';

export interface RecordFormatProps {
  mappingParameters?: MappingParametersProps
  recordFormatType: Value<string>
}