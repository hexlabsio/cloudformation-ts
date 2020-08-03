import { Value } from '../../kloudformation/Value';
import { LoadBalancerProps } from './taskSet/LoadBalancerProps';
import { NetworkConfigurationProps } from './taskSet/NetworkConfigurationProps';
import { ScaleProps } from './taskSet/ScaleProps';
import { ServiceRegistryProps } from './taskSet/ServiceRegistryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TaskSetAttributes = { Id: Attribute<string> }
export function taskSet(taskSetProps: TaskSet): TaskSet & {attributes: TaskSetAttributes} { return ({ ...taskSetProps, _logicalType: 'AWS::ECS::TaskSet', attributes: { Id: 'Id' } }) }
   
export interface TaskSet extends KloudResource {
  cluster: Value<string>
  externalId?: Value<string>
  launchType?: Value<string>
  loadBalancers?: LoadBalancerProps[]
  networkConfiguration?: NetworkConfigurationProps
  platformVersion?: Value<string>
  scale?: ScaleProps
  service: Value<string>
  serviceRegistries?: ServiceRegistryProps[]
  taskDefinition: Value<string>
}