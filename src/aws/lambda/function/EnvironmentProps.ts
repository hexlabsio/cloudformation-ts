import { Value } from '../../../kloudformation/Value';

export function environmentProps(environmentPropsProps: EnvironmentProps): EnvironmentProps { return (environmentPropsProps) }

export interface EnvironmentProps {
    variables?: { [key: string]: Value<string> };
}