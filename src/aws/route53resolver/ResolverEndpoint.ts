import { IpAddressRequestProps } from './resolverendpoint/IpAddressRequestProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resolverEndpoint(resolverEndpointProps: ResolverEndpoint & { logicalName?: string }): ResolverEndpoint { return ({ ...resolverEndpointProps, _logicalType: 'AWS::Route53Resolver::ResolverEndpoint' }) as unknown as ResolverEndpoint }

export interface ResolverEndpoint extends KloudResource {
    ipAddresses: IpAddressRequestProps[];
    direction: Value<string>;
    securityGroupIds: Value<Value<string>[]>;
    tags?: Tag[];
    name?: Value<string>;
}