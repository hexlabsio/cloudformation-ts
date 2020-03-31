import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type APNSSandboxChannelAttributes = {  }
export function aPNSSandboxChannel(aPNSSandboxChannelProps: APNSSandboxChannel): APNSSandboxChannel & { attributes: APNSSandboxChannelAttributes } { return ({ ...aPNSSandboxChannelProps, _logicalType: 'AWS::Pinpoint::APNSSandboxChannel', attributes: {  } }) }

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