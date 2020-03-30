import { DimensionConfigurationProps } from '../../ses/configurationseteventdestination/DimensionConfigurationProps';

export function cloudWatchDestinationProps(cloudWatchDestinationPropsProps: CloudWatchDestinationProps): CloudWatchDestinationProps { return (cloudWatchDestinationPropsProps) as unknown as CloudWatchDestinationProps }

export interface CloudWatchDestinationProps {
    dimensionConfigurations?: DimensionConfigurationProps[];
}