import { Value } from '../../kloudformation/Value';
import { LoadBalancerProps } from './taskset/LoadBalancerProps';
import { NetworkConfigurationProps } from './taskset/NetworkConfigurationProps';
import { ScaleProps } from './taskset/ScaleProps';
import { ServiceRegistryProps } from './taskset/ServiceRegistryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type TaskSetAttributes = { Id: Attribute<string> }
export function taskSet(taskSetProps: TaskSet): TaskSet & { attributes: TaskSetAttributes } { return ({ ...taskSetProps, _logicalType: 'AWS::ECS::TaskSet', attributes: { Id: 'Id' } }) }

export interface TaskSet extends KloudResource {
    cluster: Value<string>;
    service: Value<string>;
    taskDefinition: Value<string>;
    externalId?: Value<string>;
    launchType?: Value<string>;
    loadBalancers?: LoadBalancerProps[];
    networkConfiguration?: NetworkConfigurationProps;
    platformVersion?: Value<string>;
    scale?: ScaleProps;
    serviceRegistries?: ServiceRegistryProps[];
}