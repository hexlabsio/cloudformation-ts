import { Value } from '../../../kloudformation/Value';
import { SourceAuthProps } from './SourceAuthProps';
import { BuildStatusConfigProps } from './BuildStatusConfigProps';
import { GitSubmodulesConfigProps } from './GitSubmodulesConfigProps';

export interface SourceProps {
  type: Value<string>
  reportBuildStatus?: Value<boolean>
  auth?: SourceAuthProps
  sourceIdentifier?: Value<string>
  buildSpec?: Value<string>
  gitCloneDepth?: Value<number>
  buildStatusConfig?: BuildStatusConfigProps
  gitSubmodulesConfig?: GitSubmodulesConfigProps
  insecureSsl?: Value<boolean>
  location?: Value<string>
}