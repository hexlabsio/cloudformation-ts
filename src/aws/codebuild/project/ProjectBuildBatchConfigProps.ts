import { Value } from '../../../kloudformation/Value';
import { BatchRestrictionsProps } from './BatchRestrictionsProps';

export interface ProjectBuildBatchConfigProps {
  combineArtifacts?: Value<boolean>
  serviceRole?: Value<string>
  timeoutInMins?: Value<number>
  restrictions?: BatchRestrictionsProps
}