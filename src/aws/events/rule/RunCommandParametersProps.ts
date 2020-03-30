import { RunCommandTargetProps } from './RunCommandTargetProps';

export function runCommandParametersProps(runCommandParametersPropsProps: RunCommandParametersProps): RunCommandParametersProps { return (runCommandParametersPropsProps) as unknown as RunCommandParametersProps }

export interface RunCommandParametersProps {
    runCommandTargets: RunCommandTargetProps[];
}