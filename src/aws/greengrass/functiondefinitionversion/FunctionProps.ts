import { Value } from '../../../kloudformation/Value';
import { FunctionConfigurationProps } from './FunctionConfigurationProps';

export function functionProps(functionPropsProps: FunctionProps): FunctionProps { return (functionPropsProps) as unknown as FunctionProps }

export interface FunctionProps {
    functionArn: Value<string>;
    functionConfiguration: FunctionConfigurationProps;
    id: Value<string>;
}