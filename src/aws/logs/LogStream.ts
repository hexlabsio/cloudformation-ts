import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LogStreamAttributes = {  }
export function logStream(logStreamProps: LogStream): LogStream & { attributes: LogStreamAttributes } { return ({ ...logStreamProps, _logicalType: 'AWS::Logs::LogStream', attributes: {  } }) }

export interface LogStream extends KloudResource {
    logGroupName: Value<string>;
    logStreamName?: Value<string>;
}