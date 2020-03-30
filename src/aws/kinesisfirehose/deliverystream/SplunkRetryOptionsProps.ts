import { Value } from '../../../kloudformation/Value';

export function splunkRetryOptionsProps(splunkRetryOptionsPropsProps: SplunkRetryOptionsProps): SplunkRetryOptionsProps { return (splunkRetryOptionsPropsProps) as unknown as SplunkRetryOptionsProps }

export interface SplunkRetryOptionsProps {
    durationInSeconds: Value<number>;
}