import { Value } from '../../../kloudformation/Value';

export function ipPermissionProps(ipPermissionPropsProps: IpPermissionProps): IpPermissionProps { return (ipPermissionPropsProps) as unknown as IpPermissionProps }

export interface IpPermissionProps {
    fromPort: Value<number>;
    ipRange: Value<string>;
    protocol: Value<string>;
    toPort: Value<number>;
}