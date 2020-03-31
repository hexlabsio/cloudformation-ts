import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClientCertificateAttributes = {  }
export function clientCertificate(clientCertificateProps: ClientCertificate): ClientCertificate & { attributes: ClientCertificateAttributes } { return ({ ...clientCertificateProps, _logicalType: 'AWS::ApiGateway::ClientCertificate', attributes: {  } }) }

export interface ClientCertificate extends KloudResource {
    description?: Value<string>;
    tags?: Tag[];
}