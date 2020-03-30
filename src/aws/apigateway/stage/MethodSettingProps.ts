import { Value } from '../../../kloudformation/Value';

export function methodSettingProps(methodSettingPropsProps: MethodSettingProps): MethodSettingProps { return (methodSettingPropsProps) as unknown as MethodSettingProps }

export interface MethodSettingProps {
    cacheDataEncrypted?: Value<boolean>;
    cacheTtlInSeconds?: Value<number>;
    cachingEnabled?: Value<boolean>;
    dataTraceEnabled?: Value<boolean>;
    httpMethod?: Value<string>;
    loggingLevel?: Value<string>;
    metricsEnabled?: Value<boolean>;
    resourcePath?: Value<string>;
    throttlingBurstLimit?: Value<number>;
    throttlingRateLimit?: Value<number>;
}