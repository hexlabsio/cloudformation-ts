import { Value } from '../../../kloudformation/Value';

export function attributeTypeProps(attributeTypePropsProps: AttributeTypeProps): AttributeTypeProps { return (attributeTypePropsProps) as unknown as AttributeTypeProps }

export interface AttributeTypeProps {
    value?: Value<string>;
    name?: Value<string>;
}