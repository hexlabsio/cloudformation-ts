import { Value } from '../../../kloudformation/Value';

export interface ServerProcessProps {
  concurrentExecutions: Value<number>
  launchPath: Value<string>
  parameters?: Value<string>
}