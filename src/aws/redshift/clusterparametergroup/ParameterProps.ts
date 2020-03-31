import { Value } from '../../../kloudformation/Value';

export function parameterProps(parameterPropsProps: ParameterProps): ParameterProps { return (parameterPropsProps) }

export interface ParameterProps {
    parameterName: Value<string>;
    parameterValue: Value<string>;
}