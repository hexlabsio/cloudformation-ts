import { Value } from '../../kloudformation/Value';
import { EventSelectorProps } from './trail/EventSelectorProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function trail(trailProps: Trail & { logicalName?: string }): Trail { return ({ ...trailProps, _logicalType: 'AWS::CloudTrail::Trail' }) as unknown as Trail }

export interface Trail extends KloudResource {
    isLogging: Value<boolean>;
    s3BucketName: Value<string>;
    cloudWatchLogsLogGroupArn?: Value<string>;
    cloudWatchLogsRoleArn?: Value<string>;
    enableLogFileValidation?: Value<boolean>;
    eventSelectors?: EventSelectorProps[];
    includeGlobalServiceEvents?: Value<boolean>;
    isMultiRegionTrail?: Value<boolean>;
    kMSKeyId?: Value<string>;
    s3KeyPrefix?: Value<string>;
    snsTopicName?: Value<string>;
    tags?: Tag[];
    trailName?: Value<string>;
}