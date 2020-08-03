import { Value } from '../../../kloudformation/Value';
import { OptionsProps } from './OptionsProps';
import { SecretProps } from './SecretProps';

export interface LogConfigurationProps {
  logDriver: Value<string>
  options?: OptionsProps
  secretOptions?: SecretProps[]
}