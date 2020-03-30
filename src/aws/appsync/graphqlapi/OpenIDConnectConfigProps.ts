import { Value } from '../../../kloudformation/Value';

export function openIDConnectConfigProps(openIDConnectConfigPropsProps: OpenIDConnectConfigProps): OpenIDConnectConfigProps { return (openIDConnectConfigPropsProps) as unknown as OpenIDConnectConfigProps }

export interface OpenIDConnectConfigProps {
    issuer?: Value<string>;
    clientId?: Value<string>;
    authTTL?: Value<number>;
    iatTTL?: Value<number>;
}