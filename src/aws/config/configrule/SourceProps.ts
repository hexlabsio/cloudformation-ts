import { Value } from '../../../kloudformation/Value';
import { SourceDetailProps } from './SourceDetailProps';

export interface SourceProps {
  owner: Value<string>
  sourceDetails?: SourceDetailProps[]
  sourceIdentifier: Value<string>
}