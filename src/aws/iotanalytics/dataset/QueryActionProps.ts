import { Value } from '../../../kloudformation/Value';
import { FilterProps } from './FilterProps';

export function queryActionProps(queryActionPropsProps: QueryActionProps): QueryActionProps { return (queryActionPropsProps) }

export interface QueryActionProps {
    sqlQuery: Value<string>;
    filters?: FilterProps[];
}