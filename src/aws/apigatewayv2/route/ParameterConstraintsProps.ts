import { Value } from '../../../kloudformation/Value';

export function parameterConstraintsProps(parameterConstraintsPropsProps: ParameterConstraintsProps): ParameterConstraintsProps { return (parameterConstraintsPropsProps) as unknown as ParameterConstraintsProps }

export interface ParameterConstraintsProps {
    required: Value<boolean>;
}