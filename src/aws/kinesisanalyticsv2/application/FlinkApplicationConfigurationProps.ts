import { CheckpointConfigurationProps } from './CheckpointConfigurationProps';
import { ParallelismConfigurationProps } from './ParallelismConfigurationProps';
import { MonitoringConfigurationProps } from './MonitoringConfigurationProps';

export function flinkApplicationConfigurationProps(flinkApplicationConfigurationPropsProps: FlinkApplicationConfigurationProps): FlinkApplicationConfigurationProps { return (flinkApplicationConfigurationPropsProps) as unknown as FlinkApplicationConfigurationProps }

export interface FlinkApplicationConfigurationProps {
    checkpointConfiguration?: CheckpointConfigurationProps;
    parallelismConfiguration?: ParallelismConfigurationProps;
    monitoringConfiguration?: MonitoringConfigurationProps;
}