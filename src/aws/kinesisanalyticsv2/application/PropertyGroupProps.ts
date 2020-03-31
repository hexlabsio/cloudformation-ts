import { Value } from '../../../kloudformation/Value';

export function propertyGroupProps(propertyGroupPropsProps: PropertyGroupProps): PropertyGroupProps { return (propertyGroupPropsProps) }

export interface PropertyGroupProps {
    propertyMap?: Value<any>;
    propertyGroupId?: Value<string>;
}