import { Value } from '../../../kloudformation/Value';

export function stringAttributeConstraintsProps(stringAttributeConstraintsPropsProps: StringAttributeConstraintsProps): StringAttributeConstraintsProps { return (stringAttributeConstraintsPropsProps) }

export interface StringAttributeConstraintsProps {
    minLength?: Value<string>;
    maxLength?: Value<string>;
}