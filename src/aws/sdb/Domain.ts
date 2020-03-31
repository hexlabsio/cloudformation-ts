import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DomainAttributes = {  }
export function domain(domainProps: Domain): Domain & { attributes: DomainAttributes } { return ({ ...domainProps, _logicalType: 'AWS::SDB::Domain', attributes: {  } }) }

export interface Domain extends KloudResource {
    description?: Value<string>;
}