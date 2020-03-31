import { Value } from '../../../kloudformation/Value';

export function targetCapacitySpecificationRequestProps(targetCapacitySpecificationRequestPropsProps: TargetCapacitySpecificationRequestProps): TargetCapacitySpecificationRequestProps { return (targetCapacitySpecificationRequestPropsProps) }

export interface TargetCapacitySpecificationRequestProps {
    totalTargetCapacity: Value<number>;
    defaultTargetCapacityType?: Value<string>;
    onDemandTargetCapacity?: Value<number>;
    spotTargetCapacity?: Value<number>;
}