import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function domain(domainProps: Domain & { logicalName?: string }): Domain { return ({ ...domainProps, _logicalType: 'AWS::SDB::Domain' }) as unknown as Domain }

export interface Domain extends KloudResource {
    description?: Value<string>;
}