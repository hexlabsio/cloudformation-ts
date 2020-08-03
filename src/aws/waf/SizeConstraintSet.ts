import { Value } from '../../kloudformation/Value';
import { SizeConstraintProps } from './sizeConstraintSet/SizeConstraintProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function sizeConstraintSet(sizeConstraintSetProps: SizeConstraintSet): SizeConstraintSet { return ({ ...sizeConstraintSetProps, _logicalType: '' }) }
  
export interface SizeConstraintSet extends KloudResource {
  name: Value<string>
  sizeConstraints: SizeConstraintProps[]
}