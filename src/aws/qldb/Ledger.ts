import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function ledger(ledgerProps: Ledger): Ledger { return ({ ...ledgerProps, _logicalType: '' }) }
  
export interface Ledger extends KloudResource {
  permissionsMode: Value<string>
  deletionProtection?: Value<boolean>
  tags?: Tag[]
  name?: Value<string>
}