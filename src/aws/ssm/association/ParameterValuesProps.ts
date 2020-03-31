import { Value } from '../../../kloudformation/Value';

export function parameterValuesProps(parameterValuesPropsProps: ParameterValuesProps): ParameterValuesProps { return (parameterValuesPropsProps) }

export interface ParameterValuesProps {
    parameterValues: Value<Value<string>[]>;
}