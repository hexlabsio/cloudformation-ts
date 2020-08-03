import { Value } from '../../../kloudformation/Value';

export interface FileSystemConfigProps {
  arn: Value<string>
  localMountPath: Value<string>
}