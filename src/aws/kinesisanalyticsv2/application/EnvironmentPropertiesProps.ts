import { PropertyGroupProps } from './PropertyGroupProps';

export function environmentPropertiesProps(environmentPropertiesPropsProps: EnvironmentPropertiesProps): EnvironmentPropertiesProps { return (environmentPropertiesPropsProps) as unknown as EnvironmentPropertiesProps }

export interface EnvironmentPropertiesProps {
    propertyGroups?: PropertyGroupProps[];
}