import { Value } from '../../../kloudformation/Value';

export function environmentVariableProps(environmentVariablePropsProps: EnvironmentVariableProps): EnvironmentVariableProps { return (environmentVariablePropsProps) }

export interface EnvironmentVariableProps {
    key: Value<string>;
    value: Value<string>;
    secure?: Value<boolean>;
}