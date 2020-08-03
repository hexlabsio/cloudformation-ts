import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function aggregationAuthorization(aggregationAuthorizationProps: AggregationAuthorization): AggregationAuthorization { return ({ ...aggregationAuthorizationProps, _logicalType: '' }) }
  
export interface AggregationAuthorization extends KloudResource {
  authorizedAccountId: Value<string>
  authorizedAwsRegion: Value<string>
  tags?: Tag[]
}