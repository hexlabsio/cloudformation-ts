import { Value } from '../../../kloudformation/Value';

export interface ProvisioningHookProps {
  targetArn?: Value<string>
  payloadVersion?: Value<string>
}