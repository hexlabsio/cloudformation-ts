import { StateProps } from './StateProps';
import { Value } from '../../../kloudformation/Value';

export interface DetectorModelDefinitionProps {
  states?: StateProps[]
  initialStateName?: Value<string>
}