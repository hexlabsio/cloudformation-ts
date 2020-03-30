import { SsmControlsProps } from './SsmControlsProps';

export function executionControlsProps(executionControlsPropsProps: ExecutionControlsProps): ExecutionControlsProps { return (executionControlsPropsProps) as unknown as ExecutionControlsProps }

export interface ExecutionControlsProps {
    ssmControls?: SsmControlsProps;
}