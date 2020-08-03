import { Value } from '../../../kloudformation/Value';
import { CreationInfoProps } from './CreationInfoProps';

export interface RootDirectoryProps {
  path?: Value<string>
  creationInfo?: CreationInfoProps
}