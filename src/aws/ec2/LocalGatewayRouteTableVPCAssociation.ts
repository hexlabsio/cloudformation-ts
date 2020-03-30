import { Value } from '../../kloudformation/Value';
import { TagsProps } from './localgatewayroutetablevpcassociation/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function localGatewayRouteTableVPCAssociation(localGatewayRouteTableVPCAssociationProps: LocalGatewayRouteTableVPCAssociation & { logicalName?: string }): LocalGatewayRouteTableVPCAssociation { return ({ ...localGatewayRouteTableVPCAssociationProps, _logicalType: 'AWS::EC2::LocalGatewayRouteTableVPCAssociation' }) as unknown as LocalGatewayRouteTableVPCAssociation }

export interface LocalGatewayRouteTableVPCAssociation extends KloudResource {
    localGatewayRouteTableId: Value<string>;
    vpcId: Value<string>;
    tags?: TagsProps;
}