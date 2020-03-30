import { Value } from '../../../kloudformation/Value';
import { ForwardedValuesProps } from './ForwardedValuesProps';
import { LambdaFunctionAssociationProps } from './LambdaFunctionAssociationProps';

export function defaultCacheBehaviorProps(defaultCacheBehaviorPropsProps: DefaultCacheBehaviorProps): DefaultCacheBehaviorProps { return (defaultCacheBehaviorPropsProps) as unknown as DefaultCacheBehaviorProps }

export interface DefaultCacheBehaviorProps {
    targetOriginId: Value<string>;
    viewerProtocolPolicy: Value<string>;
    forwardedValues: ForwardedValuesProps;
    compress?: Value<boolean>;
    lambdaFunctionAssociations?: LambdaFunctionAssociationProps[];
    trustedSigners?: Value<Value<string>[]>;
    defaultTTL?: Value<number>;
    fieldLevelEncryptionId?: Value<string>;
    allowedMethods?: Value<Value<string>[]>;
    cachedMethods?: Value<Value<string>[]>;
    smoothStreaming?: Value<boolean>;
    minTTL?: Value<number>;
    maxTTL?: Value<number>;
}