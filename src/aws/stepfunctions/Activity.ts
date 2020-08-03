import { TagsEntryProps } from './activity/TagsEntryProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ActivityAttributes = { Name: Attribute<string> }
export function activity(activityProps: Activity): Activity & {attributes: ActivityAttributes} { return ({ ...activityProps, _logicalType: 'AWS::StepFunctions::Activity', attributes: { Name: 'Name' } }) }
   
export interface Activity extends KloudResource {
  tags?: TagsEntryProps[]
  name: Value<string>
}