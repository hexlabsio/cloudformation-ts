import { HealthCheckConfigProps } from './healthCheck/HealthCheckConfigProps';
import { HealthCheckTagProps } from './healthCheck/HealthCheckTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function healthCheck(healthCheckProps: HealthCheck): HealthCheck { return ({ ...healthCheckProps, _logicalType: '' }) }
  
export interface HealthCheck extends KloudResource {
  healthCheckConfig: HealthCheckConfigProps
  healthCheckTags?: HealthCheckTagProps[]
}