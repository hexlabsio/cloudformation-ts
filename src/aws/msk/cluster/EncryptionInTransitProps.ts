import { Value } from '../../../kloudformation/Value';

export interface EncryptionInTransitProps {
  clientBroker?: Value<string>
  inCluster?: Value<boolean>
}