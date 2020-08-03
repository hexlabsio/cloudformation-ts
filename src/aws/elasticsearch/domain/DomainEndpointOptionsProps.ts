import { Value } from '../../../kloudformation/Value';

export interface DomainEndpointOptionsProps {
  enforceHTTPS?: Value<boolean>
  tLSSecurityPolicy?: Value<string>
}