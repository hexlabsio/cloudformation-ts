import { VariableProps } from './VariableProps';
import { Value } from '../../../kloudformation/Value';
import { ResourceConfigurationProps } from './ResourceConfigurationProps';

export interface ContainerActionProps {
  variables?: VariableProps[]
  executionRoleArn: Value<string>
  image: Value<string>
  resourceConfiguration: ResourceConfigurationProps
}