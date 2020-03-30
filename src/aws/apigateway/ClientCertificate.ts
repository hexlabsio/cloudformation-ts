import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clientCertificate(clientCertificateProps: ClientCertificate & { logicalName?: string }): ClientCertificate { return ({ ...clientCertificateProps, _logicalType: 'AWS::ApiGateway::ClientCertificate' }) as unknown as ClientCertificate }

export interface ClientCertificate extends KloudResource {
    description?: Value<string>;
    tags?: Tag[];
}