import { Value } from '../../../kloudformation/Value';

export function attributeProps(attributePropsProps: AttributeProps): AttributeProps { return (attributePropsProps) }

export interface AttributeProps {
    jsonPath?: Value<string>;
}