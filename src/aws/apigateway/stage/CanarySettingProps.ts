import { Value } from '../../../kloudformation/Value';

export interface CanarySettingProps {
  deploymentId?: Value<string>
  percentTraffic?: Value<number>
  stageVariableOverrides?: Value<Value<string>[]>
  useStageCache?: Value<boolean>
}