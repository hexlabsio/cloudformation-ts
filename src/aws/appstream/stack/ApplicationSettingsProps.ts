import { Value } from '../../../kloudformation/Value';

export function applicationSettingsProps(applicationSettingsPropsProps: ApplicationSettingsProps): ApplicationSettingsProps { return (applicationSettingsPropsProps) as unknown as ApplicationSettingsProps }

export interface ApplicationSettingsProps {
    enabled: Value<boolean>;
    settingsGroup?: Value<string>;
}