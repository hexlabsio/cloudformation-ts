import { NotebookInstanceLifecycleHookProps } from './notebookInstanceLifecycleConfig/NotebookInstanceLifecycleHookProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NotebookInstanceLifecycleConfigAttributes = { NotebookInstanceLifecycleConfigName: Attribute<string> }
export function notebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigProps: NotebookInstanceLifecycleConfig): NotebookInstanceLifecycleConfig & {attributes: NotebookInstanceLifecycleConfigAttributes} { return ({ ...notebookInstanceLifecycleConfigProps, _logicalType: 'AWS::SageMaker::NotebookInstanceLifecycleConfig', attributes: { NotebookInstanceLifecycleConfigName: 'NotebookInstanceLifecycleConfigName' } }) }
   
export interface NotebookInstanceLifecycleConfig extends KloudResource {
  onStart?: NotebookInstanceLifecycleHookProps[]
  notebookInstanceLifecycleConfigName?: Value<string>
  onCreate?: NotebookInstanceLifecycleHookProps[]
}