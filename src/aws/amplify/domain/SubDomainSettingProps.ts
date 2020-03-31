import { Value } from '../../../kloudformation/Value';

export function subDomainSettingProps(subDomainSettingPropsProps: SubDomainSettingProps): SubDomainSettingProps { return (subDomainSettingPropsProps) }

export interface SubDomainSettingProps {
    prefix: Value<string>;
    branchName: Value<string>;
}