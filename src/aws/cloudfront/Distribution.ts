import { DistributionConfigProps } from './distribution/DistributionConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function distribution(distributionProps: Distribution & { logicalName?: string }): Distribution { return ({ ...distributionProps, _logicalType: 'AWS::CloudFront::Distribution' }) as unknown as Distribution }

export interface Distribution extends KloudResource {
    distributionConfig: DistributionConfigProps;
    tags?: Tag[];
}