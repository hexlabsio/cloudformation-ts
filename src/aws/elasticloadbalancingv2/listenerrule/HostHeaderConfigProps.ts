import { Value } from '../../../kloudformation/Value';

export function hostHeaderConfigProps(hostHeaderConfigPropsProps: HostHeaderConfigProps): HostHeaderConfigProps { return (hostHeaderConfigPropsProps) as unknown as HostHeaderConfigProps }

export interface HostHeaderConfigProps {
    values?: Value<Value<string>[]>;
}