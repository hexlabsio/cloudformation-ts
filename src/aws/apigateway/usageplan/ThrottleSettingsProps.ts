import { Value } from '../../../kloudformation/Value';

export function throttleSettingsProps(throttleSettingsPropsProps: ThrottleSettingsProps): ThrottleSettingsProps { return (throttleSettingsPropsProps) }

export interface ThrottleSettingsProps {
    burstLimit?: Value<number>;
    rateLimit?: Value<number>;
}