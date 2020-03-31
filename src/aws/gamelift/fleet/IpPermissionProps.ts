import { Value } from '../../../kloudformation/Value';

export function ipPermissionProps(ipPermissionPropsProps: IpPermissionProps): IpPermissionProps { return (ipPermissionPropsProps) }

export interface IpPermissionProps {
    fromPort: Value<number>;
    ipRange: Value<string>;
    protocol: Value<string>;
    toPort: Value<number>;
}