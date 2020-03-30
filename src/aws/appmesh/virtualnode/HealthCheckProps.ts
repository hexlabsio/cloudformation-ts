import { Value } from '../../../kloudformation/Value';

export function healthCheckProps(healthCheckPropsProps: HealthCheckProps): HealthCheckProps { return (healthCheckPropsProps) as unknown as HealthCheckProps }

export interface HealthCheckProps {
    unhealthyThreshold: Value<number>;
    healthyThreshold: Value<number>;
    timeoutMillis: Value<number>;
    protocol: Value<string>;
    intervalMillis: Value<number>;
    path?: Value<string>;
    port?: Value<number>;
}