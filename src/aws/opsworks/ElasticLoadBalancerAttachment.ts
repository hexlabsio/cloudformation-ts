import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function elasticLoadBalancerAttachment(elasticLoadBalancerAttachmentProps: ElasticLoadBalancerAttachment): ElasticLoadBalancerAttachment { return ({ ...elasticLoadBalancerAttachmentProps, _logicalType: '' }) }
  
export interface ElasticLoadBalancerAttachment extends KloudResource {
  elasticLoadBalancerName: Value<string>
  layerId: Value<string>
}