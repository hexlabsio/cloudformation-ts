import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function ledger(ledgerProps: Ledger & { logicalName?: string }): Ledger { return ({ ...ledgerProps, _logicalType: 'AWS::QLDB::Ledger' }) as unknown as Ledger }

export interface Ledger extends KloudResource {
    permissionsMode: Value<string>;
    deletionProtection?: Value<boolean>;
    tags?: Tag[];
    name?: Value<string>;
}