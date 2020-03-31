import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPNGatewayAttributes = {  }
export function vPNGateway(vPNGatewayProps: VPNGateway): VPNGateway & { attributes: VPNGatewayAttributes } { return ({ ...vPNGatewayProps, _logicalType: 'AWS::EC2::VPNGateway', attributes: {  } }) }

export interface VPNGateway extends KloudResource {
    type: Value<string>;
    amazonSideAsn?: Value<number>;
    tags?: Tag[];
}