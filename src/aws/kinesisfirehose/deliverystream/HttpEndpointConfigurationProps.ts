import { Value } from '../../../kloudformation/Value';

export interface HttpEndpointConfigurationProps {
  url: Value<string>
  accessKey?: Value<string>
  name?: Value<string>
}