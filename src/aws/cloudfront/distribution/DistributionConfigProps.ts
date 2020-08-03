import { LoggingProps } from './LoggingProps';
import { Value } from '../../../kloudformation/Value';
import { OriginProps } from './OriginProps';
import { ViewerCertificateProps } from './ViewerCertificateProps';
import { DefaultCacheBehaviorProps } from './DefaultCacheBehaviorProps';
import { CustomErrorResponseProps } from './CustomErrorResponseProps';
import { OriginGroupsProps } from './OriginGroupsProps';
import { RestrictionsProps } from './RestrictionsProps';
import { CacheBehaviorProps } from './CacheBehaviorProps';

export interface DistributionConfigProps {
  logging?: LoggingProps
  comment?: Value<string>
  defaultRootObject?: Value<string>
  origins?: OriginProps[]
  viewerCertificate?: ViewerCertificateProps
  priceClass?: Value<string>
  defaultCacheBehavior?: DefaultCacheBehaviorProps
  customErrorResponses?: CustomErrorResponseProps[]
  originGroups?: OriginGroupsProps
  enabled: Value<boolean>
  aliases?: Value<Value<string>[]>
  iPV6Enabled?: Value<boolean>
  webACLId?: Value<string>
  httpVersion?: Value<string>
  restrictions?: RestrictionsProps
  cacheBehaviors?: CacheBehaviorProps[]
}