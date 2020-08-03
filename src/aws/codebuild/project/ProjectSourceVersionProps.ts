import { Value } from '../../../kloudformation/Value';

export interface ProjectSourceVersionProps {
  sourceIdentifier: Value<string>
  sourceVersion?: Value<string>
}