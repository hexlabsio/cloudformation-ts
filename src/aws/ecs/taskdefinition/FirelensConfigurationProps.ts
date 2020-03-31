import { Value } from '../../../kloudformation/Value';

export function firelensConfigurationProps(firelensConfigurationPropsProps: FirelensConfigurationProps): FirelensConfigurationProps { return (firelensConfigurationPropsProps) }

export interface FirelensConfigurationProps {
    type: Value<string>;
    options?: { [key: string]: Value<string> };
}