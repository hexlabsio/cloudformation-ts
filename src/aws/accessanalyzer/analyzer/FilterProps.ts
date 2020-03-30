import { Value } from '../../../kloudformation/Value';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) as unknown as FilterProps }

export interface FilterProps {
    property: Value<string>;
    contains?: Value<Value<string>[]>;
    eq?: Value<Value<string>[]>;
    exists?: Value<boolean>;
    neq?: Value<Value<string>[]>;
}