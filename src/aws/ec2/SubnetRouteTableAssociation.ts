import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubnetRouteTableAssociationAttributes = {  }
export function subnetRouteTableAssociation(subnetRouteTableAssociationProps: SubnetRouteTableAssociation): SubnetRouteTableAssociation & { attributes: SubnetRouteTableAssociationAttributes } { return ({ ...subnetRouteTableAssociationProps, _logicalType: 'AWS::EC2::SubnetRouteTableAssociation', attributes: {  } }) }

export interface SubnetRouteTableAssociation extends KloudResource {
    routeTableId: Value<string>;
    subnetId: Value<string>;
}