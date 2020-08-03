import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function logStream(logStreamProps: LogStream): LogStream { return ({ ...logStreamProps, _logicalType: '' }) }
  
export interface LogStream extends KloudResource {
  logGroupName: Value<string>
  logStreamName?: Value<string>
}