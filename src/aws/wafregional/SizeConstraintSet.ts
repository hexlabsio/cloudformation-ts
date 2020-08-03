import { SizeConstraintProps } from './sizeConstraintSet/SizeConstraintProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function sizeConstraintSet(sizeConstraintSetProps: SizeConstraintSet): SizeConstraintSet { return ({ ...sizeConstraintSetProps, _logicalType: '' }) }
  
export interface SizeConstraintSet extends KloudResource {
  sizeConstraints?: SizeConstraintProps[]
  name: Value<string>
}