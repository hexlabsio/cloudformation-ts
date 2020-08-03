import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vpcLink(vpcLinkProps: VpcLink): VpcLink { return ({ ...vpcLinkProps, _logicalType: '' }) }
  
export interface VpcLink extends KloudResource {
  description?: Value<string>
  targetArns: Value<Value<string>[]>
  name: Value<string>
}