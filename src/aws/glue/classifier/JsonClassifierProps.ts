import { Value } from '../../../kloudformation/Value';

export function jsonClassifierProps(jsonClassifierPropsProps: JsonClassifierProps): JsonClassifierProps { return (jsonClassifierPropsProps) }

export interface JsonClassifierProps {
    jsonPath: Value<string>;
    name?: Value<string>;
}