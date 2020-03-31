import { DeltaTimeProps } from './DeltaTimeProps';

export function filterProps(filterPropsProps: FilterProps): FilterProps { return (filterPropsProps) }

export interface FilterProps {
    deltaTime?: DeltaTimeProps;
}