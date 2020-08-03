import { Value } from '../../kloudformation/Value';
import { ApplicationProps } from './cluster/ApplicationProps';
import { BootstrapActionConfigProps } from './cluster/BootstrapActionConfigProps';
import { ConfigurationProps } from './cluster/ConfigurationProps';
import { JobFlowInstancesConfigProps } from './cluster/JobFlowInstancesConfigProps';
import { KerberosAttributesProps } from './cluster/KerberosAttributesProps';
import { StepConfigProps } from './cluster/StepConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ClusterAttributes = { MasterPublicDNS: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & {attributes: ClusterAttributes} { return ({ ...clusterProps, _logicalType: 'AWS::EMR::Cluster', attributes: { MasterPublicDNS: 'MasterPublicDNS' } }) }
   
export interface Cluster extends KloudResource {
  additionalInfo?: Value<any>
  applications?: ApplicationProps[]
  autoScalingRole?: Value<string>
  bootstrapActions?: BootstrapActionConfigProps[]
  configurations?: ConfigurationProps[]
  customAmiId?: Value<string>
  ebsRootVolumeSize?: Value<number>
  instances: JobFlowInstancesConfigProps
  jobFlowRole: Value<string>
  kerberosAttributes?: KerberosAttributesProps
  logUri?: Value<string>
  name: Value<string>
  releaseLabel?: Value<string>
  scaleDownBehavior?: Value<string>
  securityConfiguration?: Value<string>
  serviceRole: Value<string>
  steps?: StepConfigProps[]
  tags?: Tag[]
  visibleToAllUsers?: Value<boolean>
}