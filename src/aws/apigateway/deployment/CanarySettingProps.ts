import { Value } from '../../../kloudformation/Value';

export interface CanarySettingProps {
  percentTraffic?: Value<number>
  stageVariableOverrides?: Value<Value<string>[]>
  useStageCache?: Value<boolean>
}