import { Value } from '../../../kloudformation/Value';

export function keySchemaProps(keySchemaPropsProps: KeySchemaProps): KeySchemaProps { return (keySchemaPropsProps) }

export interface KeySchemaProps {
    attributeName: Value<string>;
    keyType: Value<string>;
}