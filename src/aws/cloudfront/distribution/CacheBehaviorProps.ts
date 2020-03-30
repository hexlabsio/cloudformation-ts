import { Value } from '../../../kloudformation/Value';
import { ForwardedValuesProps } from './ForwardedValuesProps';
import { LambdaFunctionAssociationProps } from './LambdaFunctionAssociationProps';

export function cacheBehaviorProps(cacheBehaviorPropsProps: CacheBehaviorProps): CacheBehaviorProps { return (cacheBehaviorPropsProps) as unknown as CacheBehaviorProps }

export interface CacheBehaviorProps {
    targetOriginId: Value<string>;
    viewerProtocolPolicy: Value<string>;
    pathPattern: Value<string>;
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