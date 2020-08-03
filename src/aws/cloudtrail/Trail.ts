import { Value } from '../../kloudformation/Value';
import { EventSelectorProps } from './trail/EventSelectorProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TrailAttributes = { Arn: Attribute<string>;SnsTopicArn: Attribute<string> }
export function trail(trailProps: Trail): Trail & {attributes: TrailAttributes} { return ({ ...trailProps, _logicalType: 'AWS::CloudTrail::Trail', attributes: { Arn: 'Arn',SnsTopicArn: 'SnsTopicArn' } }) }
   
export interface Trail extends KloudResource {
  cloudWatchLogsLogGroupArn?: Value<string>
  cloudWatchLogsRoleArn?: Value<string>
  enableLogFileValidation?: Value<boolean>
  eventSelectors?: EventSelectorProps[]
  includeGlobalServiceEvents?: Value<boolean>
  isLogging: Value<boolean>
  isMultiRegionTrail?: Value<boolean>
  kMSKeyId?: Value<string>
  s3BucketName: Value<string>
  s3KeyPrefix?: Value<string>
  snsTopicName?: Value<string>
  tags?: Tag[]
  trailName?: Value<string>
}