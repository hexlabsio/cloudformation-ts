import { Value } from '../../../kloudformation/Value';

export interface DeviceShadowEnrichProps {
  attribute?: Value<string>
  next?: Value<string>
  thingName?: Value<string>
  roleArn?: Value<string>
  name?: Value<string>
}