import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TagOptionAttributes = {  }
export function tagOption(tagOptionProps: TagOption): TagOption & { attributes: TagOptionAttributes } { return ({ ...tagOptionProps, _logicalType: 'AWS::ServiceCatalog::TagOption', attributes: {  } }) }

export interface TagOption extends KloudResource {
    value: Value<string>;
    key: Value<string>;
    active?: Value<boolean>;
}