import { Value } from '../../../kloudformation/Value';

export function applicationSnapshotConfigurationProps(applicationSnapshotConfigurationPropsProps: ApplicationSnapshotConfigurationProps): ApplicationSnapshotConfigurationProps { return (applicationSnapshotConfigurationPropsProps) as unknown as ApplicationSnapshotConfigurationProps }

export interface ApplicationSnapshotConfigurationProps {
    snapshotsEnabled: Value<boolean>;
}