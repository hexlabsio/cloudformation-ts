import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LogGroupAttributes = { Arn: Attribute<string> }
export function logGroup(logGroupProps: LogGroup): LogGroup & {attributes: LogGroupAttributes} { return ({ ...logGroupProps, _logicalType: 'AWS::Logs::LogGroup', attributes: { Arn: 'Arn' } }) }
   
export interface LogGroup extends KloudResource {
  logGroupName?: Value<string>
  retentionInDays?: Value<number>
}