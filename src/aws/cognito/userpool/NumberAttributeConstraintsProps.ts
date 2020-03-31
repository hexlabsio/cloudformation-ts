import { Value } from '../../../kloudformation/Value';

export function numberAttributeConstraintsProps(numberAttributeConstraintsPropsProps: NumberAttributeConstraintsProps): NumberAttributeConstraintsProps { return (numberAttributeConstraintsPropsProps) }

export interface NumberAttributeConstraintsProps {
    minValue?: Value<string>;
    maxValue?: Value<string>;
}