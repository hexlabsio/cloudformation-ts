import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function threatIntelSet(threatIntelSetProps: ThreatIntelSet): ThreatIntelSet { return ({ ...threatIntelSetProps, _logicalType: '' }) }
  
export interface ThreatIntelSet extends KloudResource {
  format: Value<string>
  activate: Value<boolean>
  detectorId: Value<string>
  name?: Value<string>
  location: Value<string>
}