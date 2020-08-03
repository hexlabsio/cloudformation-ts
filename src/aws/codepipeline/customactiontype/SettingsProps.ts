import { Value } from '../../../kloudformation/Value';

export interface SettingsProps {
  entityUrlTemplate?: Value<string>
  executionUrlTemplate?: Value<string>
  revisionUrlTemplate?: Value<string>
  thirdPartyConfigurationUrl?: Value<string>
}