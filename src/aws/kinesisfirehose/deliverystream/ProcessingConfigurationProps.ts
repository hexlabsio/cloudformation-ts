import { Value } from '../../../kloudformation/Value';
import { ProcessorProps } from './ProcessorProps';

export interface ProcessingConfigurationProps {
  enabled?: Value<boolean>
  processors?: ProcessorProps[]
}