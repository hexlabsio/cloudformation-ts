import { StreamingDistributionConfigProps } from './streamingDistribution/StreamingDistributionConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type StreamingDistributionAttributes = { DomainName: Attribute<string> }
export function streamingDistribution(streamingDistributionProps: StreamingDistribution): StreamingDistribution & {attributes: StreamingDistributionAttributes} { return ({ ...streamingDistributionProps, _logicalType: 'AWS::CloudFront::StreamingDistribution', attributes: { DomainName: 'DomainName' } }) }
   
export interface StreamingDistribution extends KloudResource {
  streamingDistributionConfig: StreamingDistributionConfigProps
  tags: Tag[]
}