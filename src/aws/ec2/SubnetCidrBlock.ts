import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubnetCidrBlockAttributes = {  }
export function subnetCidrBlock(subnetCidrBlockProps: SubnetCidrBlock): SubnetCidrBlock & { attributes: SubnetCidrBlockAttributes } { return ({ ...subnetCidrBlockProps, _logicalType: 'AWS::EC2::SubnetCidrBlock', attributes: {  } }) }

export interface SubnetCidrBlock extends KloudResource {
    ipv6CidrBlock: Value<string>;
    subnetId: Value<string>;
}