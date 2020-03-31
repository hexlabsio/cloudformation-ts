import { Value } from '../../../kloudformation/Value';

export function basicAuthConfigProps(basicAuthConfigPropsProps: BasicAuthConfigProps): BasicAuthConfigProps { return (basicAuthConfigPropsProps) }

export interface BasicAuthConfigProps {
    username?: Value<string>;
    enableBasicAuth?: Value<boolean>;
    password?: Value<string>;
}