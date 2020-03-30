import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnet(subnetProps: Subnet & { logicalName?: string }): Subnet { return ({ ...subnetProps, _logicalType: 'AWS::EC2::Subnet' }) as unknown as Subnet }

export interface Subnet extends KloudResource {
    cidrBlock: Value<string>;
    vpcId: Value<string>;
    assignIpv6AddressOnCreation?: Value<boolean>;
    availabilityZone?: Value<string>;
    ipv6CidrBlock?: Value<string>;
    mapPublicIpOnLaunch?: Value<boolean>;
    tags?: Tag[];
}