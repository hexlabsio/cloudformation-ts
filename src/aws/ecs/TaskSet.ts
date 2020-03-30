import { Value } from '../../kloudformation/Value';
import { LoadBalancerProps } from './taskset/LoadBalancerProps';
import { NetworkConfigurationProps } from './taskset/NetworkConfigurationProps';
import { ScaleProps } from './taskset/ScaleProps';
import { ServiceRegistryProps } from './taskset/ServiceRegistryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function taskSet(taskSetProps: TaskSet & { logicalName?: string }): TaskSet { return ({ ...taskSetProps, _logicalType: 'AWS::ECS::TaskSet' }) as unknown as TaskSet }

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