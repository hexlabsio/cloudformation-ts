import { ActionProps } from './listener/ActionProps';
import { Value } from '../../kloudformation/Value';
import { CertificateProps } from './listenercertificate/CertificateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ListenerAttributes = {  }
export function listener(listenerProps: Listener): Listener & { attributes: ListenerAttributes } { return ({ ...listenerProps, _logicalType: 'AWS::ElasticLoadBalancingV2::Listener', attributes: {  } }) }

export interface Listener extends KloudResource {
    defaultActions: ActionProps[];
    loadBalancerArn: Value<string>;
    port: Value<number>;
    protocol: Value<string>;
    certificates?: CertificateProps[];
    sslPolicy?: Value<string>;
}