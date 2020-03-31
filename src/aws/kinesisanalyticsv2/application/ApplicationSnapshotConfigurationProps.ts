import { Value } from '../../../kloudformation/Value';

export function applicationSnapshotConfigurationProps(applicationSnapshotConfigurationPropsProps: ApplicationSnapshotConfigurationProps): ApplicationSnapshotConfigurationProps { return (applicationSnapshotConfigurationPropsProps) }

export interface ApplicationSnapshotConfigurationProps {
    snapshotsEnabled: Value<boolean>;
}