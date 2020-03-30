import { Value } from '../../../kloudformation/Value';

export function numberAttributeConstraintsProps(numberAttributeConstraintsPropsProps: NumberAttributeConstraintsProps): NumberAttributeConstraintsProps { return (numberAttributeConstraintsPropsProps) as unknown as NumberAttributeConstraintsProps }

export interface NumberAttributeConstraintsProps {
    minValue?: Value<string>;
    maxValue?: Value<string>;
}