import { Value } from '../../../kloudformation/Value';

export function healthCheckCustomConfigProps(healthCheckCustomConfigPropsProps: HealthCheckCustomConfigProps): HealthCheckCustomConfigProps { return (healthCheckCustomConfigPropsProps) }

export interface HealthCheckCustomConfigProps {
    failureThreshold?: Value<number>;
}