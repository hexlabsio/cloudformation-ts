import { ApplicationCodeConfigurationProps } from './ApplicationCodeConfigurationProps';
import { EnvironmentPropertiesProps } from './EnvironmentPropertiesProps';
import { FlinkApplicationConfigurationProps } from './FlinkApplicationConfigurationProps';
import { SqlApplicationConfigurationProps } from './SqlApplicationConfigurationProps';
import { ApplicationSnapshotConfigurationProps } from './ApplicationSnapshotConfigurationProps';

export interface ApplicationConfigurationProps {
  applicationCodeConfiguration?: ApplicationCodeConfigurationProps
  environmentProperties?: EnvironmentPropertiesProps
  flinkApplicationConfiguration?: FlinkApplicationConfigurationProps
  sqlApplicationConfiguration?: SqlApplicationConfigurationProps
  applicationSnapshotConfiguration?: ApplicationSnapshotConfigurationProps
}