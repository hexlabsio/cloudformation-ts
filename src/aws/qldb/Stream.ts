import { Value } from '../../kloudformation/Value';
import { KinesisConfigurationProps } from './stream/KinesisConfigurationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type StreamAttributes = { Arn: Attribute<string>;Id: Attribute<string> }
export function stream(streamProps: Stream): Stream & {attributes: StreamAttributes} { return ({ ...streamProps, _logicalType: 'AWS::QLDB::Stream', attributes: { Arn: 'Arn',Id: 'Id' } }) }
   
export interface Stream extends KloudResource {
  ledgerName: Value<string>
  streamName: Value<string>
  roleArn: Value<string>
  inclusiveStartTime: Value<string>
  exclusiveEndTime?: Value<string>
  kinesisConfiguration: KinesisConfigurationProps
  tags?: Tag[]
}