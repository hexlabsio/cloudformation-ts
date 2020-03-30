import { Value } from '../../../kloudformation/Value';

export function attributePayloadProps(attributePayloadPropsProps: AttributePayloadProps): AttributePayloadProps { return (attributePayloadPropsProps) as unknown as AttributePayloadProps }

export interface AttributePayloadProps {
    attributes?: { [key: string]: Value<string> };
}