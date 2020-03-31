import { Value } from '../../../kloudformation/Value';

export function privateIpAddressSpecificationProps(privateIpAddressSpecificationPropsProps: PrivateIpAddressSpecificationProps): PrivateIpAddressSpecificationProps { return (privateIpAddressSpecificationPropsProps) }

export interface PrivateIpAddressSpecificationProps {
    privateIpAddress: Value<string>;
    primary?: Value<boolean>;
}