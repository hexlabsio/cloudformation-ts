import { Value } from '../../../kloudformation/Value';

export function attributeDefinitionProps(attributeDefinitionPropsProps: AttributeDefinitionProps): AttributeDefinitionProps { return (attributeDefinitionPropsProps) }

export interface AttributeDefinitionProps {
    attributeName: Value<string>;
    attributeType: Value<string>;
}