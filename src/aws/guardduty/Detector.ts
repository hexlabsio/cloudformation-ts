import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DetectorAttributes = {  }
export function detector(detectorProps: Detector): Detector & { attributes: DetectorAttributes } { return ({ ...detectorProps, _logicalType: 'AWS::GuardDuty::Detector', attributes: {  } }) }

export interface Detector extends KloudResource {
    enable: Value<boolean>;
    findingPublishingFrequency?: Value<string>;
}