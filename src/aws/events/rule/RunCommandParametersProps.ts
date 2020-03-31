import { RunCommandTargetProps } from './RunCommandTargetProps';

export function runCommandParametersProps(runCommandParametersPropsProps: RunCommandParametersProps): RunCommandParametersProps { return (runCommandParametersPropsProps) }

export interface RunCommandParametersProps {
    runCommandTargets: RunCommandTargetProps[];
}