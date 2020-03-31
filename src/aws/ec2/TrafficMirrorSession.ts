import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TrafficMirrorSessionAttributes = {  }
export function trafficMirrorSession(trafficMirrorSessionProps: TrafficMirrorSession): TrafficMirrorSession & { attributes: TrafficMirrorSessionAttributes } { return ({ ...trafficMirrorSessionProps, _logicalType: 'AWS::EC2::TrafficMirrorSession', attributes: {  } }) }

export interface TrafficMirrorSession extends KloudResource {
    trafficMirrorTargetId: Value<string>;
    sessionNumber: Value<number>;
    networkInterfaceId: Value<string>;
    trafficMirrorFilterId: Value<string>;
    description?: Value<string>;
    virtualNetworkId?: Value<number>;
    packetLength?: Value<number>;
    tags?: Tag[];
}