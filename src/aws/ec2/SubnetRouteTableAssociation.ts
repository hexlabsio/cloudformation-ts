import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subnetRouteTableAssociation(subnetRouteTableAssociationProps: SubnetRouteTableAssociation): SubnetRouteTableAssociation { return ({ ...subnetRouteTableAssociationProps, _logicalType: '' }) }
  
export interface SubnetRouteTableAssociation extends KloudResource {
  routeTableId: Value<string>
  subnetId: Value<string>
}