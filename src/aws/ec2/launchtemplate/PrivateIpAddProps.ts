import { Value } from '../../../kloudformation/Value';

export function privateIpAddProps(privateIpAddPropsProps: PrivateIpAddProps): PrivateIpAddProps { return (privateIpAddPropsProps) }

export interface PrivateIpAddProps {
    privateIpAddress?: Value<string>;
    primary?: Value<boolean>;
}