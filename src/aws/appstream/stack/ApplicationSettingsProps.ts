import { Value } from '../../../kloudformation/Value';

export function applicationSettingsProps(applicationSettingsPropsProps: ApplicationSettingsProps): ApplicationSettingsProps { return (applicationSettingsPropsProps) }

export interface ApplicationSettingsProps {
    enabled: Value<boolean>;
    settingsGroup?: Value<string>;
}