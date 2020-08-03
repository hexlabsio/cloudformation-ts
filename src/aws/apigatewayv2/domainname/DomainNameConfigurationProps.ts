import { Value } from '../../../kloudformation/Value';

export interface DomainNameConfigurationProps {
  endpointType?: Value<string>
  certificateName?: Value<string>
  certificateArn?: Value<string>
}