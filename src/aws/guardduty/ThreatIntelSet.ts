import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ThreatIntelSetAttributes = {  }
export function threatIntelSet(threatIntelSetProps: ThreatIntelSet): ThreatIntelSet & { attributes: ThreatIntelSetAttributes } { return ({ ...threatIntelSetProps, _logicalType: 'AWS::GuardDuty::ThreatIntelSet', attributes: {  } }) }

export interface ThreatIntelSet extends KloudResource {
    format: Value<string>;
    activate: Value<boolean>;
    detectorId: Value<string>;
    location: Value<string>;
    name?: Value<string>;
}