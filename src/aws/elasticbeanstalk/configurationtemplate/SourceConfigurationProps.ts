import { Value } from '../../../kloudformation/Value';

export interface SourceConfigurationProps {
  applicationName: Value<string>
  templateName: Value<string>
}