import { Value } from '../../../kloudformation/Value';

export function accelerateConfigurationProps(accelerateConfigurationPropsProps: AccelerateConfigurationProps): AccelerateConfigurationProps { return (accelerateConfigurationPropsProps) as unknown as AccelerateConfigurationProps }

export interface AccelerateConfigurationProps {
    accelerationStatus: Value<string>;
}