import { Value } from '../../../kloudformation/Value';

export function httpHeaderConfigProps(httpHeaderConfigPropsProps: HttpHeaderConfigProps): HttpHeaderConfigProps { return (httpHeaderConfigPropsProps) as unknown as HttpHeaderConfigProps }

export interface HttpHeaderConfigProps {
    httpHeaderName?: Value<string>;
    values?: Value<Value<string>[]>;
}