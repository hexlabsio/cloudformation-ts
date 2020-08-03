import { ProcessorParameterProps } from './ProcessorParameterProps';
import { Value } from '../../../kloudformation/Value';

export interface ProcessorProps {
  parameters?: ProcessorParameterProps[]
  type: Value<string>
}