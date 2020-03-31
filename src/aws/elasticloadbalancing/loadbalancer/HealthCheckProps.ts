import { Value } from '../../../kloudformation/Value';

export function healthCheckProps(healthCheckPropsProps: HealthCheckProps): HealthCheckProps { return (healthCheckPropsProps) }

export interface HealthCheckProps {
    healthyThreshold: Value<string>;
    interval: Value<string>;
    target: Value<string>;
    timeout: Value<string>;
    unhealthyThreshold: Value<string>;
}