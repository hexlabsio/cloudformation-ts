import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IPSetAttributes = {  }
export function iPSet(iPSetProps: IPSet): IPSet & { attributes: IPSetAttributes } { return ({ ...iPSetProps, _logicalType: 'AWS::GuardDuty::IPSet', attributes: {  } }) }

export interface IPSet extends KloudResource {
    format: Value<string>;
    activate: Value<boolean>;
    detectorId: Value<string>;
    location: Value<string>;
    name?: Value<string>;
}