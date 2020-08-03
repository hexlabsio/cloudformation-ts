import { Value } from '../../../kloudformation/Value';

export interface EndpointConfigurationProps {
  endpointId: Value<string>
  weight?: Value<number>
  clientIPPreservationEnabled?: Value<boolean>
}