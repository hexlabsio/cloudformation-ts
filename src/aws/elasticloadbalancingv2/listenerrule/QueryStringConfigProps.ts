import { QueryStringKeyValueProps } from './QueryStringKeyValueProps';

export function queryStringConfigProps(queryStringConfigPropsProps: QueryStringConfigProps): QueryStringConfigProps { return (queryStringConfigPropsProps) as unknown as QueryStringConfigProps }

export interface QueryStringConfigProps {
    values?: QueryStringKeyValueProps[];
}