import { Value } from '../../../kloudformation/Value';

export function targetAddressProps(targetAddressPropsProps: TargetAddressProps): TargetAddressProps { return (targetAddressPropsProps) }

export interface TargetAddressProps {
    ip: Value<string>;
    port?: Value<string>;
}