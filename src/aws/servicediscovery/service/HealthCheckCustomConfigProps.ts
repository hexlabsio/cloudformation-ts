import { Value } from '../../../kloudformation/Value';

export function healthCheckCustomConfigProps(healthCheckCustomConfigPropsProps: HealthCheckCustomConfigProps): HealthCheckCustomConfigProps { return (healthCheckCustomConfigPropsProps) as unknown as HealthCheckCustomConfigProps }

export interface HealthCheckCustomConfigProps {
    failureThreshold?: Value<number>;
}