import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './activity/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function activity(activityProps: Activity & { logicalName?: string }): Activity { return ({ ...activityProps, _logicalType: 'AWS::StepFunctions::Activity' }) as unknown as Activity }

export interface Activity extends KloudResource {
    name: Value<string>;
    tags?: TagsEntryProps[];
}