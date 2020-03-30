import { Value } from '../../../kloudformation/Value';

export function throttleSettingsProps(throttleSettingsPropsProps: ThrottleSettingsProps): ThrottleSettingsProps { return (throttleSettingsPropsProps) as unknown as ThrottleSettingsProps }

export interface ThrottleSettingsProps {
    burstLimit?: Value<number>;
    rateLimit?: Value<number>;
}