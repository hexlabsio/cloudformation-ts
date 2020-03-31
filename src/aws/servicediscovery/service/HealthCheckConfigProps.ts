import { Value } from '../../../kloudformation/Value';

export function healthCheckConfigProps(healthCheckConfigPropsProps: HealthCheckConfigProps): HealthCheckConfigProps { return (healthCheckConfigPropsProps) }

export interface HealthCheckConfigProps {
    type: Value<string>;
    resourcePath?: Value<string>;
    failureThreshold?: Value<number>;
}