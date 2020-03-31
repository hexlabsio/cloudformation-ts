import { Value } from '../../../kloudformation/Value';

export function usernameConfigurationProps(usernameConfigurationPropsProps: UsernameConfigurationProps): UsernameConfigurationProps { return (usernameConfigurationPropsProps) }

export interface UsernameConfigurationProps {
    caseSensitive?: Value<boolean>;
}