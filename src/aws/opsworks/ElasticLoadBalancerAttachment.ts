import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function elasticLoadBalancerAttachment(elasticLoadBalancerAttachmentProps: ElasticLoadBalancerAttachment & { logicalName?: string }): ElasticLoadBalancerAttachment { return ({ ...elasticLoadBalancerAttachmentProps, _logicalType: 'AWS::OpsWorks::ElasticLoadBalancerAttachment' }) as unknown as ElasticLoadBalancerAttachment }

export interface ElasticLoadBalancerAttachment extends KloudResource {
    elasticLoadBalancerName: Value<string>;
    layerId: Value<string>;
}