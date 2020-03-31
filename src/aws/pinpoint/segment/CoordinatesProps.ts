import { Value } from '../../../kloudformation/Value';

export function coordinatesProps(coordinatesPropsProps: CoordinatesProps): CoordinatesProps { return (coordinatesPropsProps) }

export interface CoordinatesProps {
    latitude: Value<number>;
    longitude: Value<number>;
}