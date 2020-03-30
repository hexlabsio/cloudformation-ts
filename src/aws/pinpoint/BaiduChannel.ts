import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function baiduChannel(baiduChannelProps: BaiduChannel & { logicalName?: string }): BaiduChannel { return ({ ...baiduChannelProps, _logicalType: 'AWS::Pinpoint::BaiduChannel' }) as unknown as BaiduChannel }

export interface BaiduChannel extends KloudResource {
    secretKey: Value<string>;
    apiKey: Value<string>;
    applicationId: Value<string>;
    enabled?: Value<boolean>;
}