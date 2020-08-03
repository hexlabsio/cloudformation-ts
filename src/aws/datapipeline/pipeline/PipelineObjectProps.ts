import { FieldProps } from './FieldProps';
import { Value } from '../../../kloudformation/Value';

export interface PipelineObjectProps {
  fields: FieldProps[]
  id: Value<string>
  name: Value<string>
}