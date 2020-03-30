import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './version/ProvisionedConcurrencyConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function version(versionProps: Version & { logicalName?: string }): Version { return ({ ...versionProps, _logicalType: 'AWS::Lambda::Version' }) as unknown as Version }

export interface Version extends KloudResource {
    functionName: Value<string>;
    codeSha256?: Value<string>;
    description?: Value<string>;
    provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps;
}