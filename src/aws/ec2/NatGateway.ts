import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function natGateway(natGatewayProps: NatGateway & { logicalName?: string }): NatGateway { return ({ ...natGatewayProps, _logicalType: 'AWS::EC2::NatGateway' }) as unknown as NatGateway }

export interface NatGateway extends KloudResource {
    allocationId: Value<string>;
    subnetId: Value<string>;
    tags?: Tag[];
}