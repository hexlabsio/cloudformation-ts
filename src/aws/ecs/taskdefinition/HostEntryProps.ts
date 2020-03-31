import { Value } from '../../../kloudformation/Value';

export function hostEntryProps(hostEntryPropsProps: HostEntryProps): HostEntryProps { return (hostEntryPropsProps) }

export interface HostEntryProps {
    hostname: Value<string>;
    ipAddress: Value<string>;
}