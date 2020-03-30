import { HealthCheckConfigProps } from '../servicediscovery/service/HealthCheckConfigProps';
import { HealthCheckTagProps } from './healthcheck/HealthCheckTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function healthCheck(healthCheckProps: HealthCheck & { logicalName?: string }): HealthCheck { return ({ ...healthCheckProps, _logicalType: 'AWS::Route53::HealthCheck' }) as unknown as HealthCheck }

export interface HealthCheck extends KloudResource {
    healthCheckConfig: HealthCheckConfigProps;
    healthCheckTags?: HealthCheckTagProps[];
}