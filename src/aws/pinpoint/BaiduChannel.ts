import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type BaiduChannelAttributes = {  }
export function baiduChannel(baiduChannelProps: BaiduChannel): BaiduChannel & { attributes: BaiduChannelAttributes } { return ({ ...baiduChannelProps, _logicalType: 'AWS::Pinpoint::BaiduChannel', attributes: {  } }) }

export interface BaiduChannel extends KloudResource {
    secretKey: Value<string>;
    apiKey: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}