import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NamedQueryAttributes = { NamedQueryId: Attribute<string> }
export function namedQuery(namedQueryProps: NamedQuery): NamedQuery & {attributes: NamedQueryAttributes} { return ({ ...namedQueryProps, _logicalType: 'AWS::Athena::NamedQuery', attributes: { NamedQueryId: 'NamedQueryId' } }) }
   
export interface NamedQuery extends KloudResource {
  name?: Value<string>
  database: Value<string>
  description?: Value<string>
  queryString: Value<string>
}