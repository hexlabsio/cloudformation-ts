import { Value } from '../../../kloudformation/Value';

export interface DeviceProps {
  containerPath?: Value<string>
  hostPath?: Value<string>
  permissions?: Value<Value<string>[]>
}