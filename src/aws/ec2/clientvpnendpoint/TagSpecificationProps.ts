import { Value } from '../../../kloudformation/Value';
import { Tag } from '../../Tag';

export interface TagSpecificationProps {
  resourceType: Value<string>
  tags: Tag[]
}