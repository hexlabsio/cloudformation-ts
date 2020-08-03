import { AlarmIdentifierProps } from './AlarmIdentifierProps';
import { Value } from '../../../kloudformation/Value';

export interface HealthCheckConfigProps {
  alarmIdentifier?: AlarmIdentifierProps
  childHealthChecks?: Value<Value<string>[]>
  enableSNI?: Value<boolean>
  failureThreshold?: Value<number>
  fullyQualifiedDomainName?: Value<string>
  healthThreshold?: Value<number>
  iPAddress?: Value<string>
  insufficientDataHealthStatus?: Value<string>
  inverted?: Value<boolean>
  measureLatency?: Value<boolean>
  port?: Value<number>
  regions?: Value<Value<string>[]>
  requestInterval?: Value<number>
  resourcePath?: Value<string>
  searchString?: Value<string>
  type: Value<string>
}