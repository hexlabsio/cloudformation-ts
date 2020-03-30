import { Value } from '../../../kloudformation/Value';

export function healthCheckTagProps(healthCheckTagPropsProps: HealthCheckTagProps): HealthCheckTagProps { return (healthCheckTagPropsProps) as unknown as HealthCheckTagProps }

export interface HealthCheckTagProps {
    key: Value<string>;
    value: Value<string>;
}