import { Value } from '../../../kloudformation/Value';
import { ApplicationVersionLifecycleConfigProps } from './ApplicationVersionLifecycleConfigProps';

export interface ApplicationResourceLifecycleConfigProps {
  serviceRole?: Value<string>
  versionLifecycleConfig?: ApplicationVersionLifecycleConfigProps
}