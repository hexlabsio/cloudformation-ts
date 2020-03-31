import { Value } from '../../kloudformation/Value';
import { SizeConstraintProps } from './sizeconstraintset/SizeConstraintProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SizeConstraintSetAttributes = {  }
export function sizeConstraintSet(sizeConstraintSetProps: SizeConstraintSet): SizeConstraintSet & { attributes: SizeConstraintSetAttributes } { return ({ ...sizeConstraintSetProps, _logicalType: 'AWS::WAFRegional::SizeConstraintSet', attributes: {  } }) }

export interface SizeConstraintSet extends KloudResource {
    name: Value<string>;
    sizeConstraints?: SizeConstraintProps[];
}