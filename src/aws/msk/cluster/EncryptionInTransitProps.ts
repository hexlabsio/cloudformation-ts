import { Value } from '../../../kloudformation/Value';

export function encryptionInTransitProps(encryptionInTransitPropsProps: EncryptionInTransitProps): EncryptionInTransitProps { return (encryptionInTransitPropsProps) }

export interface EncryptionInTransitProps {
    clientBroker?: Value<string>;
    inCluster?: Value<boolean>;
}