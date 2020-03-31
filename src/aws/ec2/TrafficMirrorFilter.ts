import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TrafficMirrorFilterAttributes = {  }
export function trafficMirrorFilter(trafficMirrorFilterProps: TrafficMirrorFilter): TrafficMirrorFilter & { attributes: TrafficMirrorFilterAttributes } { return ({ ...trafficMirrorFilterProps, _logicalType: 'AWS::EC2::TrafficMirrorFilter', attributes: {  } }) }

export interface TrafficMirrorFilter extends KloudResource {
    description?: Value<string>;
    networkServices?: Value<Value<string>[]>;
    tags?: Tag[];
}