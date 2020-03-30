import { MemberFabricConfigurationProps } from './MemberFabricConfigurationProps';

export function memberFrameworkConfigurationProps(memberFrameworkConfigurationPropsProps: MemberFrameworkConfigurationProps): MemberFrameworkConfigurationProps { return (memberFrameworkConfigurationPropsProps) as unknown as MemberFrameworkConfigurationProps }

export interface MemberFrameworkConfigurationProps {
    memberFabricConfiguration?: MemberFabricConfigurationProps;
}