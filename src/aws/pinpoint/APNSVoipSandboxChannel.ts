import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function aPNSVoipSandboxChannel(aPNSVoipSandboxChannelProps: APNSVoipSandboxChannel & { logicalName?: string }): APNSVoipSandboxChannel { return ({ ...aPNSVoipSandboxChannelProps, _logicalType: 'AWS::Pinpoint::APNSVoipSandboxChannel' }) as unknown as APNSVoipSandboxChannel }

export interface APNSVoipSandboxChannel extends KloudResource {
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