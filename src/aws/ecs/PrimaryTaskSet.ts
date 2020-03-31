import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PrimaryTaskSetAttributes = {  }
export function primaryTaskSet(primaryTaskSetProps: PrimaryTaskSet): PrimaryTaskSet & { attributes: PrimaryTaskSetAttributes } { return ({ ...primaryTaskSetProps, _logicalType: 'AWS::ECS::PrimaryTaskSet', attributes: {  } }) }

export interface PrimaryTaskSet extends KloudResource {
    cluster: Value<string>;
    taskSetId: Value<string>;
    service: Value<string>;
}