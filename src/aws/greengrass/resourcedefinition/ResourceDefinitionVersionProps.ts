import { ResourceInstanceProps } from '../resourcedefinitionversion/ResourceInstanceProps';

export function resourceDefinitionVersionProps(resourceDefinitionVersionPropsProps: ResourceDefinitionVersionProps): ResourceDefinitionVersionProps { return (resourceDefinitionVersionPropsProps) }

export interface ResourceDefinitionVersionProps {
    resources: ResourceInstanceProps[];
}