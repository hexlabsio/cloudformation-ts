import { Value } from '../../../kloudformation/Value';

export function redirectConfigProps(redirectConfigPropsProps: RedirectConfigProps): RedirectConfigProps { return (redirectConfigPropsProps) as unknown as RedirectConfigProps }

export interface RedirectConfigProps {
    statusCode: Value<string>;
    host?: Value<string>;
    path?: Value<string>;
    port?: Value<string>;
    protocol?: Value<string>;
    query?: Value<string>;
}