import { Value } from '../../../kloudformation/Value';

export function connectionSettingsProps(connectionSettingsPropsProps: ConnectionSettingsProps): ConnectionSettingsProps { return (connectionSettingsPropsProps) as unknown as ConnectionSettingsProps }

export interface ConnectionSettingsProps {
    idleTimeout: Value<number>;
}