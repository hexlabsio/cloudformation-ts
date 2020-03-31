import { Value } from '../../../kloudformation/Value';

export function simulationSoftwareSuiteProps(simulationSoftwareSuitePropsProps: SimulationSoftwareSuiteProps): SimulationSoftwareSuiteProps { return (simulationSoftwareSuitePropsProps) }

export interface SimulationSoftwareSuiteProps {
    version: Value<string>;
    name: Value<string>;
}