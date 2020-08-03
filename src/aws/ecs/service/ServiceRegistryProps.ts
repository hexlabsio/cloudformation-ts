import { Value } from '../../../kloudformation/Value';

export interface ServiceRegistryProps {
  containerName?: Value<string>
  containerPort?: Value<number>
  port?: Value<number>
  registryArn?: Value<string>
}