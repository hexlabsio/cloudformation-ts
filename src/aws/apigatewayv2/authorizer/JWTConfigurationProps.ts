import { Value } from '../../../kloudformation/Value';

export function jWTConfigurationProps(jWTConfigurationPropsProps: JWTConfigurationProps): JWTConfigurationProps { return (jWTConfigurationPropsProps) as unknown as JWTConfigurationProps }

export interface JWTConfigurationProps {
    issuer?: Value<string>;
    audience?: Value<Value<string>[]>;
}