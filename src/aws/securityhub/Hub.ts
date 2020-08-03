import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function hub(hubProps: Hub): Hub { return ({ ...hubProps, _logicalType: '' }) }
  
export interface Hub extends KloudResource {
  tags?: Value<any>
}