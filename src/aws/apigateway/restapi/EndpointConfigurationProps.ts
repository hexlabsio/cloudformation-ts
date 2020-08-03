import { Value } from '../../../kloudformation/Value';

export interface EndpointConfigurationProps {
  types?: Value<Value<string>[]>
  vpcEndpointIds?: Value<Value<string>[]>
}