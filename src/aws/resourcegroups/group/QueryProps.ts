import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export function queryProps(queryPropsProps: QueryProps): QueryProps { return (queryPropsProps) as unknown as QueryProps }

export interface QueryProps {
    resourceTypeFilters?: Value<Value<string>[]>;
    stackIdentifier?: Value<string>;
    tagFilters?: TagFilterProps[];
}