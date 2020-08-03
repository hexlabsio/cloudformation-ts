import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function detector(detectorProps: Detector): Detector { return ({ ...detectorProps, _logicalType: '' }) }
  
export interface Detector extends KloudResource {
  findingPublishingFrequency?: Value<string>
  enable: Value<boolean>
}