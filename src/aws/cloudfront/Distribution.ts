import { DistributionConfigProps } from './distribution/DistributionConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DistributionAttributes = { DomainName: Attribute<string> }
export function distribution(distributionProps: Distribution): Distribution & { attributes: DistributionAttributes } { return ({ ...distributionProps, _logicalType: 'AWS::CloudFront::Distribution', attributes: { DomainName: 'DomainName' } }) }

export interface Distribution extends KloudResource {
    distributionConfig: DistributionConfigProps;
    tags?: Tag[];
}