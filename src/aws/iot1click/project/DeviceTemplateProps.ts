import { Value } from '../../../kloudformation/Value';

export interface DeviceTemplateProps {
  deviceType?: Value<string>
  callbackOverrides?: Value<any>
}