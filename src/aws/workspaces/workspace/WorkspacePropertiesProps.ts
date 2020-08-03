import { Value } from '../../../kloudformation/Value';

export interface WorkspacePropertiesProps {
  computeTypeName?: Value<string>
  rootVolumeSizeGib?: Value<number>
  runningMode?: Value<string>
  runningModeAutoStopTimeoutInMinutes?: Value<number>
  userVolumeSizeGib?: Value<number>
}