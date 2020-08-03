import { Value } from '../../kloudformation/Value';
import { ConnectionLogOptionsProps } from './clientVpnEndpoint/ConnectionLogOptionsProps';
import { TagSpecificationProps } from './clientVpnEndpoint/TagSpecificationProps';
import { ClientAuthenticationRequestProps } from './clientVpnEndpoint/ClientAuthenticationRequestProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clientVpnEndpoint(clientVpnEndpointProps: ClientVpnEndpoint): ClientVpnEndpoint { return ({ ...clientVpnEndpointProps, _logicalType: '' }) }
  
export interface ClientVpnEndpoint extends KloudResource {
  clientCidrBlock: Value<string>
  connectionLogOptions: ConnectionLogOptionsProps
  splitTunnel?: Value<boolean>
  description?: Value<string>
  tagSpecifications?: TagSpecificationProps[]
  vpcId?: Value<string>
  authenticationOptions: ClientAuthenticationRequestProps[]
  serverCertificateArn: Value<string>
  dnsServers?: Value<Value<string>[]>
  transportProtocol?: Value<string>
  securityGroupIds?: Value<Value<string>[]>
  vpnPort?: Value<number>
}