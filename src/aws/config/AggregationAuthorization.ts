import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function aggregationAuthorization(aggregationAuthorizationProps: AggregationAuthorization & { logicalName?: string }): AggregationAuthorization { return ({ ...aggregationAuthorizationProps, _logicalType: 'AWS::Config::AggregationAuthorization' }) as unknown as AggregationAuthorization }

export interface AggregationAuthorization extends KloudResource {
    authorizedAccountId: Value<string>;
    authorizedAwsRegion: Value<string>;
    tags?: Tag[];
}