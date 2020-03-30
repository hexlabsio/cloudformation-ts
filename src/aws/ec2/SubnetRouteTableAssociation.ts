import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnetRouteTableAssociation(subnetRouteTableAssociationProps: SubnetRouteTableAssociation & { logicalName?: string }): SubnetRouteTableAssociation { return ({ ...subnetRouteTableAssociationProps, _logicalType: 'AWS::EC2::SubnetRouteTableAssociation' }) as unknown as SubnetRouteTableAssociation }

export interface SubnetRouteTableAssociation extends KloudResource {
    routeTableId: Value<string>;
    subnetId: Value<string>;
}