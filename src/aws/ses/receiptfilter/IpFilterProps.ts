import { Value } from '../../../kloudformation/Value';

export function ipFilterProps(ipFilterPropsProps: IpFilterProps): IpFilterProps { return (ipFilterPropsProps) }

export interface IpFilterProps {
    policy: Value<string>;
    cidr: Value<string>;
}