import { Value } from '../../../kloudformation/Value';

export interface ContainerDependencyProps {
  containerName?: Value<string>
  condition?: Value<string>
}