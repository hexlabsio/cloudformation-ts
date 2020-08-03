import { Value } from '../../../kloudformation/Value';
import { RevisionLocationProps } from './RevisionLocationProps';

export interface DeploymentProps {
  description?: Value<string>
  ignoreApplicationStopFailures?: Value<boolean>
  revision: RevisionLocationProps
}