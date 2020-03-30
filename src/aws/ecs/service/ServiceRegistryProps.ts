import { Value } from '../../../kloudformation/Value';

export function serviceRegistryProps(serviceRegistryPropsProps: ServiceRegistryProps): ServiceRegistryProps { return (serviceRegistryPropsProps) as unknown as ServiceRegistryProps }

export interface ServiceRegistryProps {
    containerName?: Value<string>;
    containerPort?: Value<number>;
    port?: Value<number>;
    registryArn?: Value<string>;
}