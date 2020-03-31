import { Value } from '../../../kloudformation/Value';

export function splunkRetryOptionsProps(splunkRetryOptionsPropsProps: SplunkRetryOptionsProps): SplunkRetryOptionsProps { return (splunkRetryOptionsPropsProps) }

export interface SplunkRetryOptionsProps {
    durationInSeconds: Value<number>;
}