import { DimensionConfigurationProps } from '../../ses/configurationseteventdestination/DimensionConfigurationProps';

export function cloudWatchDestinationProps(cloudWatchDestinationPropsProps: CloudWatchDestinationProps): CloudWatchDestinationProps { return (cloudWatchDestinationPropsProps) }

export interface CloudWatchDestinationProps {
    dimensionConfigurations?: DimensionConfigurationProps[];
}