import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function primaryTaskSet(primaryTaskSetProps: PrimaryTaskSet & { logicalName?: string }): PrimaryTaskSet { return ({ ...primaryTaskSetProps, _logicalType: 'AWS::ECS::PrimaryTaskSet' }) as unknown as PrimaryTaskSet }

export interface PrimaryTaskSet extends KloudResource {
    cluster: Value<string>;
    taskSetId: Value<string>;
    service: Value<string>;
}