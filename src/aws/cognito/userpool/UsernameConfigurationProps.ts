import { Value } from '../../../kloudformation/Value';

export function usernameConfigurationProps(usernameConfigurationPropsProps: UsernameConfigurationProps): UsernameConfigurationProps { return (usernameConfigurationPropsProps) as unknown as UsernameConfigurationProps }

export interface UsernameConfigurationProps {
    caseSensitive?: Value<boolean>;
}