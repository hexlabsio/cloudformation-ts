import { Value } from '../../../kloudformation/Value';

export function healthCheckProps(healthCheckPropsProps: HealthCheckProps): HealthCheckProps { return (healthCheckPropsProps) as unknown as HealthCheckProps }

export interface HealthCheckProps {
    command: Value<Value<string>[]>;
    interval?: Value<number>;
    retries?: Value<number>;
    startPeriod?: Value<number>;
    timeout?: Value<number>;
}