import { Value } from '../../../kloudformation/Value';

export function portRangeProps(portRangePropsProps: PortRangeProps): PortRangeProps { return (portRangePropsProps) }

export interface PortRangeProps {
    from?: Value<number>;
    to?: Value<number>;
}