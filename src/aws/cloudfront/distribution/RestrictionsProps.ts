import { GeoRestrictionProps } from './GeoRestrictionProps';

export function restrictionsProps(restrictionsPropsProps: RestrictionsProps): RestrictionsProps { return (restrictionsPropsProps) as unknown as RestrictionsProps }

export interface RestrictionsProps {
    geoRestriction: GeoRestrictionProps;
}