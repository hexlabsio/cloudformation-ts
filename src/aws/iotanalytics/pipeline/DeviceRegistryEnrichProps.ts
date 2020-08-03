import { Value } from '../../../kloudformation/Value';

export interface DeviceRegistryEnrichProps {
  attribute?: Value<string>
  next?: Value<string>
  thingName?: Value<string>
  roleArn?: Value<string>
  name?: Value<string>
}