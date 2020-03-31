import { Value } from '../../../kloudformation/Value';

export function icmpProps(icmpPropsProps: IcmpProps): IcmpProps { return (icmpPropsProps) }

export interface IcmpProps {
    code?: Value<number>;
    type?: Value<number>;
}