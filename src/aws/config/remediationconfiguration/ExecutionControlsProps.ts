import { SsmControlsProps } from './SsmControlsProps';

export function executionControlsProps(executionControlsPropsProps: ExecutionControlsProps): ExecutionControlsProps { return (executionControlsPropsProps) }

export interface ExecutionControlsProps {
    ssmControls?: SsmControlsProps;
}