import { Value } from '../../kloudformation/Value';
import { AdvancedSecurityOptionsInputProps } from './domain/AdvancedSecurityOptionsInputProps';
import { CognitoOptionsProps } from './domain/CognitoOptionsProps';
import { DomainEndpointOptionsProps } from './domain/DomainEndpointOptionsProps';
import { EBSOptionsProps } from './domain/EBSOptionsProps';
import { ElasticsearchClusterConfigProps } from './domain/ElasticsearchClusterConfigProps';
import { EncryptionAtRestOptionsProps } from './domain/EncryptionAtRestOptionsProps';
import { LogPublishingOptionProps } from './domain/LogPublishingOptionProps';
import { NodeToNodeEncryptionOptionsProps } from './domain/NodeToNodeEncryptionOptionsProps';
import { SnapshotOptionsProps } from './domain/SnapshotOptionsProps';
import { Tag } from '../Tag';
import { VPCOptionsProps } from './domain/VPCOptionsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DomainAttributes = { Arn: Attribute<string>;DomainArn: Attribute<string>;DomainEndpoint: Attribute<string> }
export function domain(domainProps: Domain): Domain & {attributes: DomainAttributes} { return ({ ...domainProps, _logicalType: 'AWS::Elasticsearch::Domain', attributes: { Arn: 'Arn',DomainArn: 'DomainArn',DomainEndpoint: 'DomainEndpoint' } }) }
   
export interface Domain extends KloudResource {
  accessPolicies?: Value<any>
  advancedOptions?: Value<Value<string>[]>
  advancedSecurityOptions?: AdvancedSecurityOptionsInputProps
  cognitoOptions?: CognitoOptionsProps
  domainEndpointOptions?: DomainEndpointOptionsProps
  domainName?: Value<string>
  eBSOptions?: EBSOptionsProps
  elasticsearchClusterConfig?: ElasticsearchClusterConfigProps
  elasticsearchVersion?: Value<string>
  encryptionAtRestOptions?: EncryptionAtRestOptionsProps
  logPublishingOptions?: { [key: string]: LogPublishingOptionProps }
  nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsProps
  snapshotOptions?: SnapshotOptionsProps
  tags?: Tag[]
  vPCOptions?: VPCOptionsProps
}