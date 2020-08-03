import { Value } from '../../../kloudformation/Value';
import { LambdaFunctionAssociationProps } from './LambdaFunctionAssociationProps';
import { ForwardedValuesProps } from './ForwardedValuesProps';

export interface DefaultCacheBehaviorProps {
  compress?: Value<boolean>
  lambdaFunctionAssociations?: LambdaFunctionAssociationProps[]
  targetOriginId: Value<string>
  viewerProtocolPolicy: Value<string>
  trustedSigners?: Value<Value<string>[]>
  defaultTTL?: Value<number>
  fieldLevelEncryptionId?: Value<string>
  allowedMethods?: Value<Value<string>[]>
  cachedMethods?: Value<Value<string>[]>
  smoothStreaming?: Value<boolean>
  forwardedValues?: ForwardedValuesProps
  originRequestPolicyId?: Value<string>
  minTTL?: Value<number>
  cachePolicyId?: Value<string>
  maxTTL?: Value<number>
}