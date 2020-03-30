import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function threatIntelSet(threatIntelSetProps: ThreatIntelSet & { logicalName?: string }): ThreatIntelSet { return ({ ...threatIntelSetProps, _logicalType: 'AWS::GuardDuty::ThreatIntelSet' }) as unknown as ThreatIntelSet }

export interface ThreatIntelSet extends KloudResource {
    format: Value<string>;
    activate: Value<boolean>;
    detectorId: Value<string>;
    location: Value<string>;
    name?: Value<string>;
}