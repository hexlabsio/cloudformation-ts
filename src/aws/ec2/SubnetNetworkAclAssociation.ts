import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SubnetNetworkAclAssociationAttributes = { AssociationId: Attribute<string> }
export function subnetNetworkAclAssociation(subnetNetworkAclAssociationProps: SubnetNetworkAclAssociation): SubnetNetworkAclAssociation & { attributes: SubnetNetworkAclAssociationAttributes } { return ({ ...subnetNetworkAclAssociationProps, _logicalType: 'AWS::EC2::SubnetNetworkAclAssociation', attributes: { AssociationId: 'AssociationId' } }) }

export interface SubnetNetworkAclAssociation extends KloudResource {
    networkAclId: Value<string>;
    subnetId: Value<string>;
}