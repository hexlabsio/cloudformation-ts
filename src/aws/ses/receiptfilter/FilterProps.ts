import { IpFilterProps } from './IpFilterProps';
import { Value } from '../../../kloudformation/Value';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) as unknown as FilterProps }

export interface FilterProps {
    ipFilter: IpFilterProps;
    name?: Value<string>;
}