import { Value } from '../../../kloudformation/Value';

export function geoMatchStatementProps(geoMatchStatementPropsProps: GeoMatchStatementProps): GeoMatchStatementProps { return (geoMatchStatementPropsProps) as unknown as GeoMatchStatementProps }

export interface GeoMatchStatementProps {
    countryCodes?: Value<Value<string>[]>;
}