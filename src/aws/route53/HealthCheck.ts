import { HealthCheckConfigProps } from '../servicediscovery/service/HealthCheckConfigProps';
import { HealthCheckTagProps } from './healthcheck/HealthCheckTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type HealthCheckAttributes = {  }
export function healthCheck(healthCheckProps: HealthCheck): HealthCheck & { attributes: HealthCheckAttributes } { return ({ ...healthCheckProps, _logicalType: 'AWS::Route53::HealthCheck', attributes: {  } }) }

export interface HealthCheck extends KloudResource {
    healthCheckConfig: HealthCheckConfigProps;
    healthCheckTags?: HealthCheckTagProps[];
}