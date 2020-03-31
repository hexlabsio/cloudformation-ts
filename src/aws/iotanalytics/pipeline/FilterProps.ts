import { Value } from '../../../kloudformation/Value';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) }

export interface FilterProps {
    filter?: Value<string>;
    next?: Value<string>;
    name?: Value<string>;
}