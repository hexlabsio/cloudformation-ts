import { Value } from '../../../kloudformation/Value';

export function accelerationSettingsProps(accelerationSettingsPropsProps: AccelerationSettingsProps): AccelerationSettingsProps { return (accelerationSettingsPropsProps) as unknown as AccelerationSettingsProps }

export interface AccelerationSettingsProps {
    mode: Value<string>;
}