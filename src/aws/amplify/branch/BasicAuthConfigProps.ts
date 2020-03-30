import { Value } from '../../../kloudformation/Value';

export function basicAuthConfigProps(basicAuthConfigPropsProps: BasicAuthConfigProps): BasicAuthConfigProps { return (basicAuthConfigPropsProps) as unknown as BasicAuthConfigProps }

export interface BasicAuthConfigProps {
    username: Value<string>;
    password: Value<string>;
    enableBasicAuth?: Value<boolean>;
}