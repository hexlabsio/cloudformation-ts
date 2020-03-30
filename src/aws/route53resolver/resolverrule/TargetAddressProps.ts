import { Value } from '../../../kloudformation/Value';

export function targetAddressProps(targetAddressPropsProps: TargetAddressProps): TargetAddressProps { return (targetAddressPropsProps) as unknown as TargetAddressProps }

export interface TargetAddressProps {
    ip: Value<string>;
    port?: Value<string>;
}