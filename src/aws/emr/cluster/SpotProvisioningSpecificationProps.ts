import { Value } from '../../../kloudformation/Value';

export interface SpotProvisioningSpecificationProps {
  blockDurationMinutes?: Value<number>
  timeoutAction: Value<string>
  timeoutDurationMinutes: Value<number>
}