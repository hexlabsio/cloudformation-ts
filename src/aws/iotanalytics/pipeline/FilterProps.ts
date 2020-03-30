import { Value } from '../../../kloudformation/Value';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) as unknown as FilterProps }

export interface FilterProps {
    filter?: Value<string>;
    next?: Value<string>;
    name?: Value<string>;
}