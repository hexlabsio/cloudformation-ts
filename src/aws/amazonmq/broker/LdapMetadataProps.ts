import { InterBrokerCredProps } from './InterBrokerCredProps';
import { ServerMetadataProps } from './ServerMetadataProps';

export interface LdapMetadataProps {
  interBrokerCreds?: InterBrokerCredProps[]
  serverMetadata: ServerMetadataProps
}