import { Value } from '../../../kloudformation/Value';
import { ScheduleProps } from './ScheduleProps';
import { ParametersProps } from './ParametersProps';
import { Tag } from '../../Tag';

export interface PolicyDetailsProps {
  resourceTypes: Value<Value<string>[]>
  schedules: ScheduleProps[]
  policyType?: Value<string>
  parameters?: ParametersProps
  targetTags: Tag[]
}