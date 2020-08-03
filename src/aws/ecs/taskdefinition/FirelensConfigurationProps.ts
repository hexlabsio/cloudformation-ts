import { Value } from '../../../kloudformation/Value';
import { OptionsProps } from './OptionsProps';

export interface FirelensConfigurationProps {
  type?: Value<string>
  options?: OptionsProps
}