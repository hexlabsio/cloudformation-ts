import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function trafficMirrorFilter(trafficMirrorFilterProps: TrafficMirrorFilter): TrafficMirrorFilter { return ({ ...trafficMirrorFilterProps, _logicalType: '' }) }
  
export interface TrafficMirrorFilter extends KloudResource {
  description?: Value<string>
  networkServices?: Value<Value<string>[]>
  tags?: Tag[]
}