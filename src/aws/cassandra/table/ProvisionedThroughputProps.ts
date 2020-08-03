import { Value } from '../../../kloudformation/Value';

export interface ProvisionedThroughputProps {
  readCapacityUnits: Value<number>
  writeCapacityUnits: Value<number>
}