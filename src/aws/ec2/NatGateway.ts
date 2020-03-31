import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type NatGatewayAttributes = {  }
export function natGateway(natGatewayProps: NatGateway): NatGateway & { attributes: NatGatewayAttributes } { return ({ ...natGatewayProps, _logicalType: 'AWS::EC2::NatGateway', attributes: {  } }) }

export interface NatGateway extends KloudResource {
    allocationId: Value<string>;
    subnetId: Value<string>;
    tags?: Tag[];
}