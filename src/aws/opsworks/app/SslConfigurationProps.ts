import { Value } from '../../../kloudformation/Value';

export function sslConfigurationProps(sslConfigurationPropsProps: SslConfigurationProps): SslConfigurationProps { return (sslConfigurationPropsProps) as unknown as SslConfigurationProps }

export interface SslConfigurationProps {
    certificate?: Value<string>;
    chain?: Value<string>;
    privateKey?: Value<string>;
}