import { Value } from '../../../kloudformation/Value';

export interface InstancesDistributionProps {
  onDemandAllocationStrategy?: Value<string>
  onDemandBaseCapacity?: Value<number>
  onDemandPercentageAboveBaseCapacity?: Value<number>
  spotAllocationStrategy?: Value<string>
  spotInstancePools?: Value<number>
  spotMaxPrice?: Value<string>
}