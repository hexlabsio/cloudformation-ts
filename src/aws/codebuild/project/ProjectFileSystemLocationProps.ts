import { Value } from '../../../kloudformation/Value';

export interface ProjectFileSystemLocationProps {
  mountPoint: Value<string>
  type: Value<string>
  identifier: Value<string>
  mountOptions?: Value<string>
  location: Value<string>
}