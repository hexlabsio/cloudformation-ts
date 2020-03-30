import { ApplicationCodeConfigurationProps } from './ApplicationCodeConfigurationProps';
import { EnvironmentPropertiesProps } from './EnvironmentPropertiesProps';
import { FlinkApplicationConfigurationProps } from './FlinkApplicationConfigurationProps';
import { SqlApplicationConfigurationProps } from './SqlApplicationConfigurationProps';
import { ApplicationSnapshotConfigurationProps } from './ApplicationSnapshotConfigurationProps';

export function applicationConfigurationProps(applicationConfigurationPropsProps: ApplicationConfigurationProps): ApplicationConfigurationProps { return (applicationConfigurationPropsProps) as unknown as ApplicationConfigurationProps }

export interface ApplicationConfigurationProps {
    applicationCodeConfiguration?: ApplicationCodeConfigurationProps;
    environmentProperties?: EnvironmentPropertiesProps;
    flinkApplicationConfiguration?: FlinkApplicationConfigurationProps;
    sqlApplicationConfiguration?: SqlApplicationConfigurationProps;
    applicationSnapshotConfiguration?: ApplicationSnapshotConfigurationProps;
}