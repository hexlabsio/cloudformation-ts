import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function queue(queueProps: Queue & { logicalName?: string }): Queue { return ({ ...queueProps, _logicalType: 'AWS::MediaConvert::Queue' }) as unknown as Queue }

export interface Queue extends KloudResource {
    status?: Value<string>;
    description?: Value<string>;
    pricingPlan?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}