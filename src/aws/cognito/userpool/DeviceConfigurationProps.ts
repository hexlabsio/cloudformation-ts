import { Value } from '../../../kloudformation/Value';

export interface DeviceConfigurationProps {
  deviceOnlyRememberedOnUserPrompt?: Value<boolean>
  challengeRequiredOnNewDevice?: Value<boolean>
}