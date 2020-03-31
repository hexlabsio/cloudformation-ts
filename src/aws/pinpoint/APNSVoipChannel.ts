import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type APNSVoipChannelAttributes = {  }
export function aPNSVoipChannel(aPNSVoipChannelProps: APNSVoipChannel): APNSVoipChannel & { attributes: APNSVoipChannelAttributes } { return ({ ...aPNSVoipChannelProps, _logicalType: 'AWS::Pinpoint::APNSVoipChannel', attributes: {  } }) }

export interface APNSVoipChannel extends KloudResource {
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