import { Value } from '../../../kloudformation/Value';

export function parameterAttributeProps(parameterAttributePropsProps: ParameterAttributeProps): ParameterAttributeProps { return (parameterAttributePropsProps) }

export interface ParameterAttributeProps {
    key: Value<string>;
    stringValue: Value<string>;
}