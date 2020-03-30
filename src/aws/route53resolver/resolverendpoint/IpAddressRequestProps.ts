import { Value } from '../../../kloudformation/Value';

export function ipAddressRequestProps(ipAddressRequestPropsProps: IpAddressRequestProps): IpAddressRequestProps { return (ipAddressRequestPropsProps) as unknown as IpAddressRequestProps }

export interface IpAddressRequestProps {
    subnetId: Value<string>;
    ip?: Value<string>;
}