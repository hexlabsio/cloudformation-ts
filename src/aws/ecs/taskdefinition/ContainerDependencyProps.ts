import { Value } from '../../../kloudformation/Value';

export function containerDependencyProps(containerDependencyPropsProps: ContainerDependencyProps): ContainerDependencyProps { return (containerDependencyPropsProps) as unknown as ContainerDependencyProps }

export interface ContainerDependencyProps {
    condition: Value<string>;
    containerName: Value<string>;
}