import { Value } from '../../../kloudformation/Value';

export function openIDConnectConfigProps(openIDConnectConfigPropsProps: OpenIDConnectConfigProps): OpenIDConnectConfigProps { return (openIDConnectConfigPropsProps) }

export interface OpenIDConnectConfigProps {
    issuer?: Value<string>;
    clientId?: Value<string>;
    authTTL?: Value<number>;
    iatTTL?: Value<number>;
}