import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './activity/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ActivityAttributes = { Name: Attribute<string> }
export function activity(activityProps: Activity): Activity & { attributes: ActivityAttributes } { return ({ ...activityProps, _logicalType: 'AWS::StepFunctions::Activity', attributes: { Name: 'Name' } }) }

export interface Activity extends KloudResource {
    name: Value<string>;
    tags?: TagsEntryProps[];
}