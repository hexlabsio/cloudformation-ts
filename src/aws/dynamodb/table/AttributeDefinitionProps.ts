import { Value } from '../../../kloudformation/Value';

export function attributeDefinitionProps(attributeDefinitionPropsProps: AttributeDefinitionProps): AttributeDefinitionProps { return (attributeDefinitionPropsProps) as unknown as AttributeDefinitionProps }

export interface AttributeDefinitionProps {
    attributeName: Value<string>;
    attributeType: Value<string>;
}