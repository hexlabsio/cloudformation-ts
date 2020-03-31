import { Value } from '../../../kloudformation/Value';

export function httpRequestMethodConfigProps(httpRequestMethodConfigPropsProps: HttpRequestMethodConfigProps): HttpRequestMethodConfigProps { return (httpRequestMethodConfigPropsProps) }

export interface HttpRequestMethodConfigProps {
    values?: Value<Value<string>[]>;
}