import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AggregationAuthorizationAttributes = {  }
export function aggregationAuthorization(aggregationAuthorizationProps: AggregationAuthorization): AggregationAuthorization & { attributes: AggregationAuthorizationAttributes } { return ({ ...aggregationAuthorizationProps, _logicalType: 'AWS::Config::AggregationAuthorization', attributes: {  } }) }

export interface AggregationAuthorization extends KloudResource {
    authorizedAccountId: Value<string>;
    authorizedAwsRegion: Value<string>;
    tags?: Tag[];
}