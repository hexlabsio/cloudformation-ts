import { Value } from '../../../kloudformation/Value';

export interface ScheduleProps {
  scheduleExpression?: Value<string>
  pipelineExecutionStartCondition?: Value<string>
}