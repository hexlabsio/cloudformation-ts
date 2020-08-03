import { Value } from '../../kloudformation/Value';
import { CertificateProps } from './listener/CertificateProps';
import { ActionProps } from './listener/ActionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function listener(listenerProps: Listener): Listener { return ({ ...listenerProps, _logicalType: '' }) }
  
export interface Listener extends KloudResource {
  alpnPolicy?: Value<Value<string>[]>
  certificates?: CertificateProps[]
  defaultActions: ActionProps[]
  loadBalancerArn: Value<string>
  port: Value<number>
  protocol: Value<string>
  sslPolicy?: Value<string>
}