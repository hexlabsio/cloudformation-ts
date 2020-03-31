import { Value } from '../../../kloudformation/Value';

export function privateIpAddressSpecificationProps(privateIpAddressSpecificationPropsProps: PrivateIpAddressSpecificationProps): PrivateIpAddressSpecificationProps { return (privateIpAddressSpecificationPropsProps) }

export interface PrivateIpAddressSpecificationProps {
    primary: Value<boolean>;
    privateIpAddress: Value<string>;
}