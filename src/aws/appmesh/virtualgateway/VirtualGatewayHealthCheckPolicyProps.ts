import { Value } from '../../../kloudformation/Value';

export interface VirtualGatewayHealthCheckPolicyProps {
  path?: Value<string>
  unhealthyThreshold: Value<number>
  port?: Value<number>
  healthyThreshold: Value<number>
  timeoutMillis: Value<number>
  protocol: Value<string>
  intervalMillis: Value<number>
}