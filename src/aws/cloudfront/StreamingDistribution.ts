import { StreamingDistributionConfigProps } from './streamingdistribution/StreamingDistributionConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function streamingDistribution(streamingDistributionProps: StreamingDistribution & { logicalName?: string }): StreamingDistribution { return ({ ...streamingDistributionProps, _logicalType: 'AWS::CloudFront::StreamingDistribution' }) as unknown as StreamingDistribution }

export interface StreamingDistribution extends KloudResource {
    streamingDistributionConfig: StreamingDistributionConfigProps;
    tags: Tag[];
}