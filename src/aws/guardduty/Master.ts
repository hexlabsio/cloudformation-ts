import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function master(masterProps: Master): Master { return ({ ...masterProps, _logicalType: '' }) }
  
export interface Master extends KloudResource {
  detectorId: Value<string>
  masterId: Value<string>
  invitationId?: Value<string>
}