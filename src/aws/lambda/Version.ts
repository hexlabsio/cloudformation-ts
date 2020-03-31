import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './version/ProvisionedConcurrencyConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type VersionAttributes = { Version: Attribute<string> }
export function version(versionProps: Version): Version & { attributes: VersionAttributes } { return ({ ...versionProps, _logicalType: 'AWS::Lambda::Version', attributes: { Version: 'Version' } }) }

export interface Version extends KloudResource {
    functionName: Value<string>;
    codeSha256?: Value<string>;
    description?: Value<string>;
    provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps;
}