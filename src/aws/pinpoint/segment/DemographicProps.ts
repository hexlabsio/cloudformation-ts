import { SetDimensionProps } from './SetDimensionProps';

export function demographicProps(demographicPropsProps: DemographicProps): DemographicProps { return (demographicPropsProps) as unknown as DemographicProps }

export interface DemographicProps {
    appVersion?: SetDimensionProps;
    deviceType?: SetDimensionProps;
    platform?: SetDimensionProps;
    channel?: SetDimensionProps;
    model?: SetDimensionProps;
    make?: SetDimensionProps;
}