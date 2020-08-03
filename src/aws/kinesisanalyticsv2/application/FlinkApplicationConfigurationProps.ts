import { CheckpointConfigurationProps } from './CheckpointConfigurationProps';
import { ParallelismConfigurationProps } from './ParallelismConfigurationProps';
import { MonitoringConfigurationProps } from './MonitoringConfigurationProps';

export interface FlinkApplicationConfigurationProps {
  checkpointConfiguration?: CheckpointConfigurationProps
  parallelismConfiguration?: ParallelismConfigurationProps
  monitoringConfiguration?: MonitoringConfigurationProps
}