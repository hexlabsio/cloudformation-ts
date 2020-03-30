import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function detector(detectorProps: Detector & { logicalName?: string }): Detector { return ({ ...detectorProps, _logicalType: 'AWS::GuardDuty::Detector' }) as unknown as Detector }

export interface Detector extends KloudResource {
    enable: Value<boolean>;
    findingPublishingFrequency?: Value<string>;
}