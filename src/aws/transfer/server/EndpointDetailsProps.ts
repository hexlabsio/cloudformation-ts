import { Value } from '../../../kloudformation/Value';

export interface EndpointDetailsProps {
  addressAllocationIds?: Value<Value<string>[]>
  vpcId?: Value<string>
  vpcEndpointId?: Value<string>
  subnetIds?: Value<Value<string>[]>
}