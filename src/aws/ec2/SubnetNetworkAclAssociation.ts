import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SubnetNetworkAclAssociationAttributes = { AssociationId: Attribute<string> }
export function subnetNetworkAclAssociation(subnetNetworkAclAssociationProps: SubnetNetworkAclAssociation): SubnetNetworkAclAssociation & {attributes: SubnetNetworkAclAssociationAttributes} { return ({ ...subnetNetworkAclAssociationProps, _logicalType: 'AWS::EC2::SubnetNetworkAclAssociation', attributes: { AssociationId: 'AssociationId' } }) }
   
export interface SubnetNetworkAclAssociation extends KloudResource {
  networkAclId: Value<string>
  subnetId: Value<string>
}