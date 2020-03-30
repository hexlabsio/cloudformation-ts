import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function tagOption(tagOptionProps: TagOption & { logicalName?: string }): TagOption { return ({ ...tagOptionProps, _logicalType: 'AWS::ServiceCatalog::TagOption' }) as unknown as TagOption }

export interface TagOption extends KloudResource {
    value: Value<string>;
    key: Value<string>;
    active?: Value<boolean>;
}