import { ParameterAttributeProps } from './ParameterAttributeProps';
import { Value } from '../../../kloudformation/Value';

export interface ParameterObjectProps {
  attributes: ParameterAttributeProps[]
  id: Value<string>
}