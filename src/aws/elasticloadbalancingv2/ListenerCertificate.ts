import { CertificateProps } from './listenercertificate/CertificateProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function listenerCertificate(listenerCertificateProps: ListenerCertificate & { logicalName?: string }): ListenerCertificate { return ({ ...listenerCertificateProps, _logicalType: 'AWS::ElasticLoadBalancingV2::ListenerCertificate' }) as unknown as ListenerCertificate }

export interface ListenerCertificate extends KloudResource {
    certificates: CertificateProps[];
    listenerArn: Value<string>;
}