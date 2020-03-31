import { Value } from '../../../kloudformation/Value';

export function attributeTypeProps(attributeTypePropsProps: AttributeTypeProps): AttributeTypeProps { return (attributeTypePropsProps) }

export interface AttributeTypeProps {
    value?: Value<string>;
    name?: Value<string>;
}