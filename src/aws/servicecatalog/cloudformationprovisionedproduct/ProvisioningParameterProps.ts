import { Value } from '../../../kloudformation/Value';

export interface ProvisioningParameterProps {
  key: Value<string>
  value: Value<string>
}