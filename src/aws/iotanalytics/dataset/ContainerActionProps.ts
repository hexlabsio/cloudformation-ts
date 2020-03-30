import { Value } from '../../../kloudformation/Value';
import { ResourceConfigurationProps } from './ResourceConfigurationProps';
import { VariableProps } from './VariableProps';

export function containerActionProps(containerActionPropsProps: ContainerActionProps): ContainerActionProps { return (containerActionPropsProps) as unknown as ContainerActionProps }

export interface ContainerActionProps {
    executionRoleArn: Value<string>;
    image: Value<string>;
    resourceConfiguration: ResourceConfigurationProps;
    variables?: VariableProps[];
}