import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ADMChannelAttributes = {  }
export function aDMChannel(aDMChannelProps: ADMChannel): ADMChannel & { attributes: ADMChannelAttributes } { return ({ ...aDMChannelProps, _logicalType: 'AWS::Pinpoint::ADMChannel', attributes: {  } }) }

export interface ADMChannel extends KloudResource {
    clientSecret: Value<string>;
    clientId: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}