import { GPSPointProps } from './GPSPointProps';
import { SetDimensionProps } from './SetDimensionProps';

export function locationProps(locationPropsProps: LocationProps): LocationProps { return (locationPropsProps) as unknown as LocationProps }

export interface LocationProps {
    gPSPoint?: GPSPointProps;
    country?: SetDimensionProps;
}