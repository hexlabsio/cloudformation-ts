import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function aPNSChannel(aPNSChannelProps: APNSChannel & { logicalName?: string }): APNSChannel { return ({ ...aPNSChannelProps, _logicalType: 'AWS::Pinpoint::APNSChannel' }) as unknown as APNSChannel }

export interface APNSChannel extends KloudResource {
    applicationId: Value<string>;
    bundleId?: Value<string>;
    privateKey?: Value<string>;
    enabled?: Value<boolean>;
    defaultAuthenticationMethod?: Value<string>;
    tokenKey?: Value<string>;
    teamId?: Value<string>;
    certificate?: Value<string>;
    tokenKeyId?: Value<string>;
}