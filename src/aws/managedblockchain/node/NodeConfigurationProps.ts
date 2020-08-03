import { Value } from '../../../kloudformation/Value';

export interface NodeConfigurationProps {
  availabilityZone: Value<string>
  instanceType: Value<string>
}