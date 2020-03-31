import { Value } from '../../../kloudformation/Value';

export function subnetMappingProps(subnetMappingPropsProps: SubnetMappingProps): SubnetMappingProps { return (subnetMappingPropsProps) }

export interface SubnetMappingProps {
    allocationId: Value<string>;
    subnetId: Value<string>;
}