import { Value } from '../../../kloudformation/Value';
import { FunctionConfigurationProps } from './FunctionConfigurationProps';

export interface FunctionProps {
  functionArn: Value<string>
  functionConfiguration: FunctionConfigurationProps
  id: Value<string>
}