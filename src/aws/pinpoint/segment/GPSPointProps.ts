import { Value } from '../../../kloudformation/Value';
import { CoordinatesProps } from './CoordinatesProps';

export function gPSPointProps(gPSPointPropsProps: GPSPointProps): GPSPointProps { return (gPSPointPropsProps) as unknown as GPSPointProps }

export interface GPSPointProps {
    rangeInKilometers: Value<number>;
    coordinates: CoordinatesProps;
}