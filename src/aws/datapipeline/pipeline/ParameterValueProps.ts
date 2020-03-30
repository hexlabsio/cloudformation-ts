import { Value } from '../../../kloudformation/Value';

export function parameterValueProps(parameterValuePropsProps: ParameterValueProps): ParameterValueProps { return (parameterValuePropsProps) as unknown as ParameterValueProps }

export interface ParameterValueProps {
    id: Value<string>;
    stringValue: Value<string>;
}