import { Value } from '../../../kloudformation/Value';
import { OriginGroupProps } from './OriginGroupProps';

export interface OriginGroupsProps {
  quantity: Value<number>
  items?: OriginGroupProps[]
}