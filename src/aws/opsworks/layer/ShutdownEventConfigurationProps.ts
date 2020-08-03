import { Value } from '../../../kloudformation/Value';

export interface ShutdownEventConfigurationProps {
  delayUntilElbConnectionsDrained?: Value<boolean>
  executionTimeout?: Value<number>
}