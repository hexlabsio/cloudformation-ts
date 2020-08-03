import { Value } from '../../../kloudformation/Value';

export interface FirehoseProps {
  deliveryStream?: Value<string>
  enabled: Value<boolean>
}