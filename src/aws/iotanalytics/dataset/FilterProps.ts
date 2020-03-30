import { DeltaTimeProps } from './DeltaTimeProps';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) as unknown as FilterProps }

export interface FilterProps {
    deltaTime?: DeltaTimeProps;
}