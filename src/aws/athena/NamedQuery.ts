import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function namedQuery(namedQueryProps: NamedQuery & { logicalName?: string }): NamedQuery { return ({ ...namedQueryProps, _logicalType: 'AWS::Athena::NamedQuery' }) as unknown as NamedQuery }

export interface NamedQuery extends KloudResource {
    database: Value<string>;
    queryString: Value<string>;
    name?: Value<string>;
    description?: Value<string>;
}