import { Value } from '../../../kloudformation/Value';

export interface DeviceProps {
  syncShadow?: Value<boolean>
  thingArn: Value<string>
  id: Value<string>
  certificateArn: Value<string>
}