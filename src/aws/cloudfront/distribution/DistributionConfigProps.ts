import { Value } from '../../../kloudformation/Value';
import { OriginGroupsProps } from './OriginGroupsProps';
import { LoggingProps } from '../streamingdistribution/LoggingProps';
import { OriginProps } from './OriginProps';
import { ViewerCertificateProps } from './ViewerCertificateProps';
import { DefaultCacheBehaviorProps } from './DefaultCacheBehaviorProps';
import { CustomErrorResponseProps } from './CustomErrorResponseProps';
import { RestrictionsProps } from './RestrictionsProps';
import { CacheBehaviorProps } from './CacheBehaviorProps';

export function distributionConfigProps(distributionConfigPropsProps: DistributionConfigProps): DistributionConfigProps { return (distributionConfigPropsProps) as unknown as DistributionConfigProps }

export interface DistributionConfigProps {
    enabled: Value<boolean>;
    originGroups?: OriginGroupsProps;
    logging?: LoggingProps;
    comment?: Value<string>;
    defaultRootObject?: Value<string>;
    origins?: OriginProps[];
    viewerCertificate?: ViewerCertificateProps;
    priceClass?: Value<string>;
    defaultCacheBehavior?: DefaultCacheBehaviorProps;
    customErrorResponses?: CustomErrorResponseProps[];
    aliases?: Value<Value<string>[]>;
    iPV6Enabled?: Value<boolean>;
    webACLId?: Value<string>;
    httpVersion?: Value<string>;
    restrictions?: RestrictionsProps;
    cacheBehaviors?: CacheBehaviorProps[];
}