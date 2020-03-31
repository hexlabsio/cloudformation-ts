import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type APNSChannelAttributes = {  }
export function aPNSChannel(aPNSChannelProps: APNSChannel): APNSChannel & { attributes: APNSChannelAttributes } { return ({ ...aPNSChannelProps, _logicalType: 'AWS::Pinpoint::APNSChannel', attributes: {  } }) }

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