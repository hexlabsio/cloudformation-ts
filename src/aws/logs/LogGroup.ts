import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function logGroup(logGroupProps: LogGroup & { logicalName?: string }): LogGroup { return ({ ...logGroupProps, _logicalType: 'AWS::Logs::LogGroup' }) as unknown as LogGroup }

export interface LogGroup extends KloudResource {
    logGroupName?: Value<string>;
    retentionInDays?: Value<number>;
}