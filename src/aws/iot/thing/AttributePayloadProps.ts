import { Value } from '../../../kloudformation/Value';

export function attributePayloadProps(attributePayloadPropsProps: AttributePayloadProps): AttributePayloadProps { return (attributePayloadPropsProps) }

export interface AttributePayloadProps {
    attributes?: { [key: string]: Value<string> };
}