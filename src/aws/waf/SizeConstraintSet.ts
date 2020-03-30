import { Value } from '../../kloudformation/Value';
import { SizeConstraintProps } from '../wafregional/sizeconstraintset/SizeConstraintProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function sizeConstraintSet(sizeConstraintSetProps: SizeConstraintSet & { logicalName?: string }): SizeConstraintSet { return ({ ...sizeConstraintSetProps, _logicalType: 'AWS::WAF::SizeConstraintSet' }) as unknown as SizeConstraintSet }

export interface SizeConstraintSet extends KloudResource {
    name: Value<string>;
    sizeConstraints: SizeConstraintProps[];
}