import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnetCidrBlock(subnetCidrBlockProps: SubnetCidrBlock & { logicalName?: string }): SubnetCidrBlock { return ({ ...subnetCidrBlockProps, _logicalType: 'AWS::EC2::SubnetCidrBlock' }) as unknown as SubnetCidrBlock }

export interface SubnetCidrBlock extends KloudResource {
    ipv6CidrBlock: Value<string>;
    subnetId: Value<string>;
}