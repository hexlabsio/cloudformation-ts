import { SubDomainSettingProps } from './domain/SubDomainSettingProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function domain(domainProps: Domain & { logicalName?: string }): Domain { return ({ ...domainProps, _logicalType: 'AWS::Amplify::Domain' }) as unknown as Domain }

export interface Domain extends KloudResource {
    subDomainSettings: SubDomainSettingProps[];
    appId: Value<string>;
    domainName: Value<string>;
}