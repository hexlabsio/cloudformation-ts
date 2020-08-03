import { Value } from '../../../kloudformation/Value';

export interface DeviceProps {
  hostPath?: Value<string>
  permissions?: Value<Value<string>[]>
  containerPath?: Value<string>
}