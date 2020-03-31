import { SetDimensionProps } from './SetDimensionProps';

export function demographicProps(demographicPropsProps: DemographicProps): DemographicProps { return (demographicPropsProps) }

export interface DemographicProps {
    appVersion?: SetDimensionProps;
    deviceType?: SetDimensionProps;
    platform?: SetDimensionProps;
    channel?: SetDimensionProps;
    model?: SetDimensionProps;
    make?: SetDimensionProps;
}