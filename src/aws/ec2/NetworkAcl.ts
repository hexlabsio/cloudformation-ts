import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type NetworkAclAttributes = {  }
export function networkAcl(networkAclProps: NetworkAcl): NetworkAcl & { attributes: NetworkAclAttributes } { return ({ ...networkAclProps, _logicalType: 'AWS::EC2::NetworkAcl', attributes: {  } }) }

export interface NetworkAcl extends KloudResource {
    vpcId: Value<string>;
    tags?: Tag[];
}