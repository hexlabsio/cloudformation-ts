import { Value } from '../../../kloudformation/Value';

export function icmpProps(icmpPropsProps: IcmpProps): IcmpProps { return (icmpPropsProps) as unknown as IcmpProps }

export interface IcmpProps {
    code?: Value<number>;
    type?: Value<number>;
}