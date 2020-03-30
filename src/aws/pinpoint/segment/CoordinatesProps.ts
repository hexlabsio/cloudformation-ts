import { Value } from '../../../kloudformation/Value';

export function coordinatesProps(coordinatesPropsProps: CoordinatesProps): CoordinatesProps { return (coordinatesPropsProps) as unknown as CoordinatesProps }

export interface CoordinatesProps {
    latitude: Value<number>;
    longitude: Value<number>;
}