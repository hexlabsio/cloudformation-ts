import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type NamedQueryAttributes = { NamedQueryId: Attribute<string> }
export function namedQuery(namedQueryProps: NamedQuery): NamedQuery & { attributes: NamedQueryAttributes } { return ({ ...namedQueryProps, _logicalType: 'AWS::Athena::NamedQuery', attributes: { NamedQueryId: 'NamedQueryId' } }) }

export interface NamedQuery extends KloudResource {
    database: Value<string>;
    queryString: Value<string>;
    name?: Value<string>;
    description?: Value<string>;
}