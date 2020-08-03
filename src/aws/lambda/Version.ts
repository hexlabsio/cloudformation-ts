import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './version/ProvisionedConcurrencyConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VersionAttributes = { Version: Attribute<string> }
export function version(versionProps: Version): Version & {attributes: VersionAttributes} { return ({ ...versionProps, _logicalType: 'AWS::Lambda::Version', attributes: { Version: 'Version' } }) }
   
export interface Version extends KloudResource {
  codeSha256?: Value<string>
  description?: Value<string>
  functionName: Value<string>
  provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps
}