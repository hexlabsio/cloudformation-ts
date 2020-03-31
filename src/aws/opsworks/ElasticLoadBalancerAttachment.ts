import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ElasticLoadBalancerAttachmentAttributes = {  }
export function elasticLoadBalancerAttachment(elasticLoadBalancerAttachmentProps: ElasticLoadBalancerAttachment): ElasticLoadBalancerAttachment & { attributes: ElasticLoadBalancerAttachmentAttributes } { return ({ ...elasticLoadBalancerAttachmentProps, _logicalType: 'AWS::OpsWorks::ElasticLoadBalancerAttachment', attributes: {  } }) }

export interface ElasticLoadBalancerAttachment extends KloudResource {
    elasticLoadBalancerName: Value<string>;
    layerId: Value<string>;
}