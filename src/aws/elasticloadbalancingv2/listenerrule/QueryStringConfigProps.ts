import { QueryStringKeyValueProps } from './QueryStringKeyValueProps';

export function queryStringConfigProps(queryStringConfigPropsProps: QueryStringConfigProps): QueryStringConfigProps { return (queryStringConfigPropsProps) }

export interface QueryStringConfigProps {
    values?: QueryStringKeyValueProps[];
}