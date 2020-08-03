import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function hostedConfigurationVersion(hostedConfigurationVersionProps: HostedConfigurationVersion): HostedConfigurationVersion { return ({ ...hostedConfigurationVersionProps, _logicalType: '' }) }
  
export interface HostedConfigurationVersion extends KloudResource {
  configurationProfileId: Value<string>
  description?: Value<string>
  contentType: Value<string>
  latestVersionNumber?: Value<number>
  content: Value<string>
  applicationId: Value<string>
}