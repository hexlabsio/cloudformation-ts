import { Value } from '../../../kloudformation/Value';

export function firelensConfigurationProps(firelensConfigurationPropsProps: FirelensConfigurationProps): FirelensConfigurationProps { return (firelensConfigurationPropsProps) as unknown as FirelensConfigurationProps }

export interface FirelensConfigurationProps {
    type: Value<string>;
    options?: { [key: string]: Value<string> };
}