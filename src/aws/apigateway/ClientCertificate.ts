import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clientCertificate(clientCertificateProps: ClientCertificate): ClientCertificate { return ({ ...clientCertificateProps, _logicalType: '' }) }
  
export interface ClientCertificate extends KloudResource {
  description?: Value<string>
  tags?: Tag[]
}