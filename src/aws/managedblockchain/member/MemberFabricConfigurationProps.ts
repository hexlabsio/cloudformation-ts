import { Value } from '../../../kloudformation/Value';

export function memberFabricConfigurationProps(memberFabricConfigurationPropsProps: MemberFabricConfigurationProps): MemberFabricConfigurationProps { return (memberFabricConfigurationPropsProps) }

export interface MemberFabricConfigurationProps {
    adminUsername: Value<string>;
    adminPassword: Value<string>;
}