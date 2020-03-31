import { Value } from '../../kloudformation/Value';
import { TagsProps } from './localgatewayroutetablevpcassociation/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LocalGatewayRouteTableVPCAssociationAttributes = { LocalGatewayId: Attribute<string>; LocalGatewayRouteTableVpcAssociationId: Attribute<string>; State: Attribute<string> }
export function localGatewayRouteTableVPCAssociation(localGatewayRouteTableVPCAssociationProps: LocalGatewayRouteTableVPCAssociation): LocalGatewayRouteTableVPCAssociation & { attributes: LocalGatewayRouteTableVPCAssociationAttributes } { return ({ ...localGatewayRouteTableVPCAssociationProps, _logicalType: 'AWS::EC2::LocalGatewayRouteTableVPCAssociation', attributes: { LocalGatewayId: 'LocalGatewayId', LocalGatewayRouteTableVpcAssociationId: 'LocalGatewayRouteTableVpcAssociationId', State: 'State' } }) }

export interface LocalGatewayRouteTableVPCAssociation extends KloudResource {
    localGatewayRouteTableId: Value<string>;
    vpcId: Value<string>;
    tags?: TagsProps;
}