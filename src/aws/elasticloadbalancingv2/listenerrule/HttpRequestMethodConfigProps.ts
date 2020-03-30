import { Value } from '../../../kloudformation/Value';

export function httpRequestMethodConfigProps(httpRequestMethodConfigPropsProps: HttpRequestMethodConfigProps): HttpRequestMethodConfigProps { return (httpRequestMethodConfigPropsProps) as unknown as HttpRequestMethodConfigProps }

export interface HttpRequestMethodConfigProps {
    values?: Value<Value<string>[]>;
}