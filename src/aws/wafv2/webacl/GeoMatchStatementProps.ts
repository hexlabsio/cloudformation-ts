import { Value } from '../../../kloudformation/Value';

export function geoMatchStatementProps(geoMatchStatementPropsProps: GeoMatchStatementProps): GeoMatchStatementProps { return (geoMatchStatementPropsProps) }

export interface GeoMatchStatementProps {
    countryCodes?: Value<Value<string>[]>;
}