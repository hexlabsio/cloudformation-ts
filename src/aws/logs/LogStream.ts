import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function logStream(logStreamProps: LogStream & { logicalName?: string }): LogStream { return ({ ...logStreamProps, _logicalType: 'AWS::Logs::LogStream' }) as unknown as LogStream }

export interface LogStream extends KloudResource {
    logGroupName: Value<string>;
    logStreamName?: Value<string>;
}