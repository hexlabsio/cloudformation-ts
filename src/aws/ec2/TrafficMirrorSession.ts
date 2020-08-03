import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function trafficMirrorSession(trafficMirrorSessionProps: TrafficMirrorSession): TrafficMirrorSession { return ({ ...trafficMirrorSessionProps, _logicalType: '' }) }
  
export interface TrafficMirrorSession extends KloudResource {
  trafficMirrorTargetId: Value<string>
  description?: Value<string>
  sessionNumber: Value<number>
  virtualNetworkId?: Value<number>
  packetLength?: Value<number>
  networkInterfaceId: Value<string>
  trafficMirrorFilterId: Value<string>
  tags?: Tag[]
}