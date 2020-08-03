import { Value } from '../../../kloudformation/Value';

export interface TargetCapacitySpecificationRequestProps {
  defaultTargetCapacityType?: Value<string>
  totalTargetCapacity: Value<number>
  onDemandTargetCapacity?: Value<number>
  spotTargetCapacity?: Value<number>
}