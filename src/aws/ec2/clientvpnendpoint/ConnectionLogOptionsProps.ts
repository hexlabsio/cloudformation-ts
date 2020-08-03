import { Value } from '../../../kloudformation/Value';

export interface ConnectionLogOptionsProps {
  cloudwatchLogStream?: Value<string>
  enabled: Value<boolean>
  cloudwatchLogGroup?: Value<string>
}