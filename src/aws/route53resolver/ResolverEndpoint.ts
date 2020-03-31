import { IpAddressRequestProps } from './resolverendpoint/IpAddressRequestProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ResolverEndpointAttributes = { ResolverEndpointId: Attribute<string>; IpAddressCount: Attribute<string>; Arn: Attribute<string>; Direction: Attribute<string>; HostVPCId: Attribute<string>; Name: Attribute<string> }
export function resolverEndpoint(resolverEndpointProps: ResolverEndpoint): ResolverEndpoint & { attributes: ResolverEndpointAttributes } { return ({ ...resolverEndpointProps, _logicalType: 'AWS::Route53Resolver::ResolverEndpoint', attributes: { ResolverEndpointId: 'ResolverEndpointId', IpAddressCount: 'IpAddressCount', Arn: 'Arn', Direction: 'Direction', HostVPCId: 'HostVPCId', Name: 'Name' } }) }

export interface ResolverEndpoint extends KloudResource {
    ipAddresses: IpAddressRequestProps[];
    direction: Value<string>;
    securityGroupIds: Value<Value<string>[]>;
    tags?: Tag[];
    name?: Value<string>;
}