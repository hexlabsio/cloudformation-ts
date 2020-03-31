import { Value } from '../../../kloudformation/Value';

export function attributeDimensionProps(attributeDimensionPropsProps: AttributeDimensionProps): AttributeDimensionProps { return (attributeDimensionPropsProps) }

export interface AttributeDimensionProps {
    attributeType?: Value<string>;
    values?: Value<Value<string>[]>;
}