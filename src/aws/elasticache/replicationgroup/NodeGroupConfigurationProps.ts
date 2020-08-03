import { Value } from '../../../kloudformation/Value';

export interface NodeGroupConfigurationProps {
  nodeGroupId?: Value<string>
  primaryAvailabilityZone?: Value<string>
  replicaAvailabilityZones?: Value<Value<string>[]>
  replicaCount?: Value<number>
  slots?: Value<string>
}