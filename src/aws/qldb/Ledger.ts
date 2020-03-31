import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LedgerAttributes = {  }
export function ledger(ledgerProps: Ledger): Ledger & { attributes: LedgerAttributes } { return ({ ...ledgerProps, _logicalType: 'AWS::QLDB::Ledger', attributes: {  } }) }

export interface Ledger extends KloudResource {
    permissionsMode: Value<string>;
    deletionProtection?: Value<boolean>;
    tags?: Tag[];
    name?: Value<string>;
}