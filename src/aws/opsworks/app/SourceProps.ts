import { Value } from '../../../kloudformation/Value';

export interface SourceProps {
  password?: Value<string>
  revision?: Value<string>
  sshKey?: Value<string>
  type?: Value<string>
  url?: Value<string>
  username?: Value<string>
}