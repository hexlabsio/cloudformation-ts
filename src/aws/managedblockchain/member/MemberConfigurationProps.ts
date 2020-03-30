import { Value } from '../../../kloudformation/Value';
import { MemberFrameworkConfigurationProps } from './MemberFrameworkConfigurationProps';

export function memberConfigurationProps(memberConfigurationPropsProps: MemberConfigurationProps): MemberConfigurationProps { return (memberConfigurationPropsProps) as unknown as MemberConfigurationProps }

export interface MemberConfigurationProps {
    name: Value<string>;
    description?: Value<string>;
    memberFrameworkConfiguration?: MemberFrameworkConfigurationProps;
}