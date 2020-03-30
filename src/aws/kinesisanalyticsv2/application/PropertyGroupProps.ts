import { Value } from '../../../kloudformation/Value';

export function propertyGroupProps(propertyGroupPropsProps: PropertyGroupProps): PropertyGroupProps { return (propertyGroupPropsProps) as unknown as PropertyGroupProps }

export interface PropertyGroupProps {
    propertyMap?: Value<any>;
    propertyGroupId?: Value<string>;
}