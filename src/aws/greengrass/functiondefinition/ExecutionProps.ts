import { Value } from '../../../kloudformation/Value';
import { RunAsProps } from '../functiondefinitionversion/RunAsProps';

export function executionProps(executionPropsProps: ExecutionProps): ExecutionProps { return (executionPropsProps) as unknown as ExecutionProps }

export interface ExecutionProps {
    isolationMode?: Value<string>;
    runAs?: RunAsProps;
}