import { Value } from '../../../kloudformation/Value';

export function applicationProps(applicationPropsProps: ApplicationProps): ApplicationProps { return (applicationPropsProps) as unknown as ApplicationProps }

export interface ApplicationProps {
    additionalInfo?: { [key: string]: Value<string> };
    args?: Value<Value<string>[]>;
    name?: Value<string>;
    version?: Value<string>;
}