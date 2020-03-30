import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function trafficMirrorFilter(trafficMirrorFilterProps: TrafficMirrorFilter & { logicalName?: string }): TrafficMirrorFilter { return ({ ...trafficMirrorFilterProps, _logicalType: 'AWS::EC2::TrafficMirrorFilter' }) as unknown as TrafficMirrorFilter }

export interface TrafficMirrorFilter extends KloudResource {
    description?: Value<string>;
    networkServices?: Value<Value<string>[]>;
    tags?: Tag[];
}