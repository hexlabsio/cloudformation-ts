import { StreamingDistributionConfigProps } from './streamingdistribution/StreamingDistributionConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type StreamingDistributionAttributes = { DomainName: Attribute<string> }
export function streamingDistribution(streamingDistributionProps: StreamingDistribution): StreamingDistribution & { attributes: StreamingDistributionAttributes } { return ({ ...streamingDistributionProps, _logicalType: 'AWS::CloudFront::StreamingDistribution', attributes: { DomainName: 'DomainName' } }) }

export interface StreamingDistribution extends KloudResource {
    streamingDistributionConfig: StreamingDistributionConfigProps;
    tags: Tag[];
}