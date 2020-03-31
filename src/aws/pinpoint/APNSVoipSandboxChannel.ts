import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type APNSVoipSandboxChannelAttributes = {  }
export function aPNSVoipSandboxChannel(aPNSVoipSandboxChannelProps: APNSVoipSandboxChannel): APNSVoipSandboxChannel & { attributes: APNSVoipSandboxChannelAttributes } { return ({ ...aPNSVoipSandboxChannelProps, _logicalType: 'AWS::Pinpoint::APNSVoipSandboxChannel', attributes: {  } }) }

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