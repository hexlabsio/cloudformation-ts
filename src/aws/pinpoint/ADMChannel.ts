import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function aDMChannel(aDMChannelProps: ADMChannel & { logicalName?: string }): ADMChannel { return ({ ...aDMChannelProps, _logicalType: 'AWS::Pinpoint::ADMChannel' }) as unknown as ADMChannel }

export interface ADMChannel extends KloudResource {
    clientSecret: Value<string>;
    clientId: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}