import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnetNetworkAclAssociation(subnetNetworkAclAssociationProps: SubnetNetworkAclAssociation & { logicalName?: string }): SubnetNetworkAclAssociation { return ({ ...subnetNetworkAclAssociationProps, _logicalType: 'AWS::EC2::SubnetNetworkAclAssociation' }) as unknown as SubnetNetworkAclAssociation }

export interface SubnetNetworkAclAssociation extends KloudResource {
    networkAclId: Value<string>;
    subnetId: Value<string>;
}