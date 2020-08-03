import { Value } from '../../../kloudformation/Value';
import { EnvironmentProps } from './EnvironmentProps';

export interface FunctionConfigurationProps {
  memorySize?: Value<number>
  pinned?: Value<boolean>
  execArgs?: Value<string>
  timeout?: Value<number>
  encodingType?: Value<string>
  environment?: EnvironmentProps
  executable?: Value<string>
}