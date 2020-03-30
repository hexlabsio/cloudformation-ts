import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPNGateway(vPNGatewayProps: VPNGateway & { logicalName?: string }): VPNGateway { return ({ ...vPNGatewayProps, _logicalType: 'AWS::EC2::VPNGateway' }) as unknown as VPNGateway }

export interface VPNGateway extends KloudResource {
    type: Value<string>;
    amazonSideAsn?: Value<number>;
    tags?: Tag[];
}