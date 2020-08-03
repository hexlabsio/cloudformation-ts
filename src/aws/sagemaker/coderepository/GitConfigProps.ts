import { Value } from '../../../kloudformation/Value';

export interface GitConfigProps {
  secretArn?: Value<string>
  branch?: Value<string>
  repositoryUrl: Value<string>
}