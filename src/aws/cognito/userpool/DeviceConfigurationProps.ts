import { Value } from '../../../kloudformation/Value';

export function deviceConfigurationProps(deviceConfigurationPropsProps: DeviceConfigurationProps): DeviceConfigurationProps { return (deviceConfigurationPropsProps) }

export interface DeviceConfigurationProps {
    deviceOnlyRememberedOnUserPrompt?: Value<boolean>;
    challengeRequiredOnNewDevice?: Value<boolean>;
}