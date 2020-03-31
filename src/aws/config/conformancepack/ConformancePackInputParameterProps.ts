import { Value } from '../../../kloudformation/Value';

export function conformancePackInputParameterProps(conformancePackInputParameterPropsProps: ConformancePackInputParameterProps): ConformancePackInputParameterProps { return (conformancePackInputParameterPropsProps) }

export interface ConformancePackInputParameterProps {
    parameterName: Value<string>;
    parameterValue: Value<string>;
}