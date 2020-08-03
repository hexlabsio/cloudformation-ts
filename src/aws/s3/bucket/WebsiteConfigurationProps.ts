import { Value } from '../../../kloudformation/Value';
import { RedirectAllRequestsToProps } from './RedirectAllRequestsToProps';
import { RoutingRuleProps } from './RoutingRuleProps';

export interface WebsiteConfigurationProps {
  errorDocument?: Value<string>
  indexDocument?: Value<string>
  redirectAllRequestsTo?: RedirectAllRequestsToProps
  routingRules?: RoutingRuleProps[]
}