import { CertificateProps } from './listenercertificate/CertificateProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ListenerCertificateAttributes = {  }
export function listenerCertificate(listenerCertificateProps: ListenerCertificate): ListenerCertificate & { attributes: ListenerCertificateAttributes } { return ({ ...listenerCertificateProps, _logicalType: 'AWS::ElasticLoadBalancingV2::ListenerCertificate', attributes: {  } }) }

export interface ListenerCertificate extends KloudResource {
    certificates: CertificateProps[];
    listenerArn: Value<string>;
}