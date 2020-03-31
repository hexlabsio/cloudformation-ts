import { Value } from '../../../kloudformation/Value';

export function queryStringKeyValueProps(queryStringKeyValuePropsProps: QueryStringKeyValueProps): QueryStringKeyValueProps { return (queryStringKeyValuePropsProps) }

export interface QueryStringKeyValueProps {
    key?: Value<string>;
    value?: Value<string>;
}