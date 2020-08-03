import { Value } from '../../../kloudformation/Value';
import { Tag } from '../../Tag';

export interface SpotFleetTagSpecificationProps {
  resourceType?: Value<string>
  tags?: Tag[]
}