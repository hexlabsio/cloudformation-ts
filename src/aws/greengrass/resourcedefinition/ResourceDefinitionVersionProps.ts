import { ResourceInstanceProps } from '../resourcedefinitionversion/ResourceInstanceProps';

export function resourceDefinitionVersionProps(resourceDefinitionVersionPropsProps: ResourceDefinitionVersionProps): ResourceDefinitionVersionProps { return (resourceDefinitionVersionPropsProps) as unknown as ResourceDefinitionVersionProps }

export interface ResourceDefinitionVersionProps {
    resources: ResourceInstanceProps[];
}