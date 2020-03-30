import { Value } from '../../../kloudformation/Value';

export function settingsProps(settingsPropsProps: SettingsProps): SettingsProps { return (settingsPropsProps) as unknown as SettingsProps }

export interface SettingsProps {
    entityUrlTemplate?: Value<string>;
    executionUrlTemplate?: Value<string>;
    revisionUrlTemplate?: Value<string>;
    thirdPartyConfigurationUrl?: Value<string>;
}