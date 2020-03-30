import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function iPSet(iPSetProps: IPSet & { logicalName?: string }): IPSet { return ({ ...iPSetProps, _logicalType: 'AWS::GuardDuty::IPSet' }) as unknown as IPSet }

export interface IPSet extends KloudResource {
    format: Value<string>;
    activate: Value<boolean>;
    detectorId: Value<string>;
    location: Value<string>;
    name?: Value<string>;
}