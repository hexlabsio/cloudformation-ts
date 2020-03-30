import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function aPNSSandboxChannel(aPNSSandboxChannelProps: APNSSandboxChannel & { logicalName?: string }): APNSSandboxChannel { return ({ ...aPNSSandboxChannelProps, _logicalType: 'AWS::Pinpoint::APNSSandboxChannel' }) as unknown as APNSSandboxChannel }

export interface APNSSandboxChannel extends KloudResource {
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