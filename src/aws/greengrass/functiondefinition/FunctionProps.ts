import { Value } from '../../../kloudformation/Value';
import { FunctionConfigurationProps } from '../functiondefinitionversion/FunctionConfigurationProps';

export function functionProps(functionPropsProps: FunctionProps): FunctionProps { return (functionPropsProps) }

export interface FunctionProps {
    functionArn: Value<string>;
    functionConfiguration: FunctionConfigurationProps;
    id: Value<string>;
}