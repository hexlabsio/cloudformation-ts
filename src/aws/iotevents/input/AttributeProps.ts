import { Value } from '../../../kloudformation/Value';

export function attributeProps(attributePropsProps: AttributeProps): AttributeProps { return (attributePropsProps) as unknown as AttributeProps }

export interface AttributeProps {
    jsonPath?: Value<string>;
}