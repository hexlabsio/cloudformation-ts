import { Value } from '../../../kloudformation/Value';

export function environmentProps(environmentPropsProps: EnvironmentProps): EnvironmentProps { return (environmentPropsProps) as unknown as EnvironmentProps }

export interface EnvironmentProps {
    value?: Value<string>;
    name?: Value<string>;
}