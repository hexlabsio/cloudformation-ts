import { Value } from '../../../kloudformation/Value';

export function parameterValuesProps(parameterValuesPropsProps: ParameterValuesProps): ParameterValuesProps { return (parameterValuesPropsProps) as unknown as ParameterValuesProps }

export interface ParameterValuesProps {
    parameterValues: Value<Value<string>[]>;
}