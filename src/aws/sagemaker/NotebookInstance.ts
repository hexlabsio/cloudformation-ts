import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NotebookInstanceAttributes = { NotebookInstanceName: Attribute<string> }
export function notebookInstance(notebookInstanceProps: NotebookInstance): NotebookInstance & {attributes: NotebookInstanceAttributes} { return ({ ...notebookInstanceProps, _logicalType: 'AWS::SageMaker::NotebookInstance', attributes: { NotebookInstanceName: 'NotebookInstanceName' } }) }
   
export interface NotebookInstance extends KloudResource {
  kmsKeyId?: Value<string>
  volumeSizeInGB?: Value<number>
  additionalCodeRepositories?: Value<Value<string>[]>
  defaultCodeRepository?: Value<string>
  directInternetAccess?: Value<string>
  acceleratorTypes?: Value<Value<string>[]>
  subnetId?: Value<string>
  securityGroupIds?: Value<Value<string>[]>
  roleArn: Value<string>
  rootAccess?: Value<string>
  notebookInstanceName?: Value<string>
  instanceType: Value<string>
  lifecycleConfigName?: Value<string>
  tags?: Tag[]
}