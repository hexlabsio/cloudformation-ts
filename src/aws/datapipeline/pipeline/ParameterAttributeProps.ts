import { Value } from '../../../kloudformation/Value';

export function parameterAttributeProps(parameterAttributePropsProps: ParameterAttributeProps): ParameterAttributeProps { return (parameterAttributePropsProps) as unknown as ParameterAttributeProps }

export interface ParameterAttributeProps {
    key: Value<string>;
    stringValue: Value<string>;
}