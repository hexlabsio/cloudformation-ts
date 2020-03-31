import { Value } from '../../../kloudformation/Value';

export function connectionSettingsProps(connectionSettingsPropsProps: ConnectionSettingsProps): ConnectionSettingsProps { return (connectionSettingsPropsProps) }

export interface ConnectionSettingsProps {
    idleTimeout: Value<number>;
}