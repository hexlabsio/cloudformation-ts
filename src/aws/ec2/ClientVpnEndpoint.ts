import { Value } from '../../kloudformation/Value';
import { ConnectionLogOptionsProps } from './clientvpnendpoint/ConnectionLogOptionsProps';
import { ClientAuthenticationRequestProps } from './clientvpnendpoint/ClientAuthenticationRequestProps';
import { TagSpecificationProps } from './clientvpnendpoint/TagSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClientVpnEndpointAttributes = {  }
export function clientVpnEndpoint(clientVpnEndpointProps: ClientVpnEndpoint): ClientVpnEndpoint & { attributes: ClientVpnEndpointAttributes } { return ({ ...clientVpnEndpointProps, _logicalType: 'AWS::EC2::ClientVpnEndpoint', attributes: {  } }) }

export interface ClientVpnEndpoint extends KloudResource {
    clientCidrBlock: Value<string>;
    connectionLogOptions: ConnectionLogOptionsProps;
    authenticationOptions: ClientAuthenticationRequestProps[];
    serverCertificateArn: Value<string>;
    splitTunnel?: Value<boolean>;
    description?: Value<string>;
    tagSpecifications?: TagSpecificationProps[];
    vpcId?: Value<string>;
    dnsServers?: Value<Value<string>[]>;
    transportProtocol?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    vpnPort?: Value<number>;
}