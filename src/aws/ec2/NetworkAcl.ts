import { Tag } from '../Tag';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function networkAcl(networkAclProps: NetworkAcl): NetworkAcl { return ({ ...networkAclProps, _logicalType: '' }) }
  
export interface NetworkAcl extends KloudResource {
  tags?: Tag[]
  vpcId: Value<string>
}