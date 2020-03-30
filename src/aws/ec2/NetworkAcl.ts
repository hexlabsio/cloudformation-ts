import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function networkAcl(networkAclProps: NetworkAcl & { logicalName?: string }): NetworkAcl { return ({ ...networkAclProps, _logicalType: 'AWS::EC2::NetworkAcl' }) as unknown as NetworkAcl }

export interface NetworkAcl extends KloudResource {
    vpcId: Value<string>;
    tags?: Tag[];
}