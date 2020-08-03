import { Value } from '../../../kloudformation/Value';
import { FindMatchesParametersProps } from './FindMatchesParametersProps';

export interface TransformParametersProps {
  transformType: Value<string>
  findMatchesParameters?: FindMatchesParametersProps
}