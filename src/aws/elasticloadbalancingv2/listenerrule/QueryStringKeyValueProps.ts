import { Value } from '../../../kloudformation/Value';

export function queryStringKeyValueProps(queryStringKeyValuePropsProps: QueryStringKeyValueProps): QueryStringKeyValueProps { return (queryStringKeyValuePropsProps) as unknown as QueryStringKeyValueProps }

export interface QueryStringKeyValueProps {
    key?: Value<string>;
    value?: Value<string>;
}