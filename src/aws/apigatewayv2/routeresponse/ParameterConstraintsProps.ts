import { Value } from '../../../kloudformation/Value';

export function parameterConstraintsProps(parameterConstraintsPropsProps: ParameterConstraintsProps): ParameterConstraintsProps { return (parameterConstraintsPropsProps) }

export interface ParameterConstraintsProps {
    required: Value<boolean>;
}