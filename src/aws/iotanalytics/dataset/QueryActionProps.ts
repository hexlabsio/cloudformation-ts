import { Value } from '../../../kloudformation/Value';
import { FilterProps } from './FilterProps';

export function queryActionProps(queryActionPropsProps: QueryActionProps): QueryActionProps { return (queryActionPropsProps) as unknown as QueryActionProps }

export interface QueryActionProps {
    sqlQuery: Value<string>;
    filters?: FilterProps[];
}