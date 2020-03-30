import { CoreProps } from './CoreProps';

export function coreDefinitionVersionProps(coreDefinitionVersionPropsProps: CoreDefinitionVersionProps): CoreDefinitionVersionProps { return (coreDefinitionVersionPropsProps) as unknown as CoreDefinitionVersionProps }

export interface CoreDefinitionVersionProps {
    cores: CoreProps[];
}