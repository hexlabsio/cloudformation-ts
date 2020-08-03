import { Value } from '../../../kloudformation/Value';

export interface DeploymentCanarySettingsProps {
  percentTraffic?: Value<number>
  stageVariableOverrides?: Value<Value<string>[]>
  useStageCache?: Value<boolean>
}