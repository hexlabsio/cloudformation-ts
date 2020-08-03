import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function member(memberProps: Member): Member { return ({ ...memberProps, _logicalType: '' }) }
  
export interface Member extends KloudResource {
  status?: Value<string>
  memberId: Value<string>
  email: Value<string>
  message?: Value<string>
  disableEmailNotification?: Value<boolean>
  detectorId: Value<string>
}